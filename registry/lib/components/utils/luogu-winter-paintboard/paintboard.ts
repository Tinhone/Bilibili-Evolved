import { delay } from '@/core/utils'
import { console, refresh, setDb, network, Md5, getOptions } from './utils'
import { refreshBoardData } from './paint'

const boardSize = { w: 1000, h: 600 }

export const generateBoardData = async () => {
  if (getOptions().isStopped) {
    return
  }

  console.log('[绘版数据] 开始刷新绘版版面数据')

  const xhr: Promise<any> = network.board()
  const xhrResult = await xhr
    .then(result => {
      console.log('[绘版数据] 请求发送成功')
      return result
    })
    .catch(error => {
      console.error('[绘版数据] 请求发送失败', error)
      return error
    })

  if (xhrResult?.status !== 200) {
    console.log(`[绘版数据] 请求异常 错误：${xhrResult?.status}`)
    console.log('[绘版数据] 将在 90 秒后重新尝试刷新绘版版面数据')
    refresh.generateBoardDataCooldownWhenGenerateFailed()

    await delay(90000)

    if (getOptions().isStopped) {
      return
    }

    console.log('[绘版数据] 重新尝试刷新绘版版面数据')
    await generateBoardData()

    return
  }

  const response = xhrResult.responseText

  // 现在它是个数组，每组是一行地图
  const boardRawData = response.trim().split('\n') // 去除头尾空格并进行分割
  console.log('[绘版数据] 绘版版面数据加载完成')

  const boardDataSaveTemp: any = []

  for (let x = 0; x < boardSize.w; x++) {
    boardDataSaveTemp[x] = []
    for (let y = 0; y < boardSize.h; y++) {
      // 绘板采用 Hex 形式储存像素颜色数据
      // 0~5 切作一份，6~11 切作一份，12~17 切作一份，以此类推
      // slice 不会把 0~6、6~12、12~18 中的 6、12、18 也就是最后一位算入捕获的字符串中
      boardDataSaveTemp[x][y] = { color: boardRawData[x].slice(y * 6, y * 6 + 6) }
    }
  }

  console.log(`[绘版数据] 成功生成绘版版面数据：${Md5.hashStr(JSON.stringify(boardDataSaveTemp))}`)
  await setDb('boardData', boardDataSaveTemp)
  console.log('[绘版数据] 绘版版面数据已储存')
  await refreshBoardData()
}
