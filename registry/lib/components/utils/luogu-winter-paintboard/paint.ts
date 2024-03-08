import { delay } from '@/core/utils'
import {
  console,
  getTimestamp,
  getOptions,
  getDb,
  refresh,
  detectPixel,
  network,
  Md5,
} from './utils'

import { generateBoardData } from './paintboard'

const { imgSize, uidList, imgPaintPosition } = getOptions() as any

let boardData: any
let boardDataHash: any

const paint = async (
  x: number,
  y: number,
  color: string,
  uid: number,
  token: string,
  imgX: number,
  imgY: number,
  boardColor: number,
) => {
  const logSuffix = `\nuid：${uid} x：${x} y：${y} color：${color} boardColor：${boardColor} imgX：${imgX} imgY：${imgY}`
  console.log(`[绘制] 尝试绘制 绘版版面数据：${boardDataHash} ${logSuffix}`)

  const xhr: Promise<any> = network.paint(x, y, color, uid, token)
  const xhrResult = await xhr
    .then(result => {
      console.log('[绘制] 请求发送成功')
      return result
    })
    .catch(error => {
      console.error(`[绘制] 请求发送失败 ${logSuffix}`, error)
      return error
    })

  if (xhrResult?.status !== 200) {
    console.log(`[绘制] 请求异常 错误：${xhrResult?.status} ${logSuffix}`)
    return
  }

  const response = JSON.parse(xhrResult.responseText)

  const when = {
    eventClose() {
      console.log(`[绘制] 不在活动时间内 ${logSuffix}`)
    },
    success() {
      console.log(`[绘制] 绘制成功 ${logSuffix}`)

      // getOptions() 赋值会导致卡顿，不知道要怎样解决
      // 破案了，卡顿的原因是原来的 imgData 和 boardData 体积太过庞大，拖累了油猴对存储的读取
      refresh.lastPixelPaintPosition(x, y, imgX, imgY)
      refresh.tokenCooldown(uid)
    },
    cooldown() {
      console.log(`[绘制] 账号正在冷却中 ${logSuffix}`)
      refresh.tokenCooldownWhenInCooldown(uid)
    },
    userVerifyFailed() {
      console.log(`[绘制] 用户认证失败 ${logSuffix}`)
      refresh.tokenCooldown(uid)
    },
    other() {
      console.log(`[绘制] 遭遇其他情况 ${logSuffix}`)
      refresh.tokenCooldown(uid)
    },
  }

  if (response.data === '不在活动时间内') {
    when.eventClose()
  } else if (response.status === 200 && response.data === '') {
    when.success()
  } else if (response.status === 412 && response.data.indexOf('冷却中') > -1) {
    when.cooldown()
  } else if (response.status === 401 && response.data === '用户认证失败') {
    when.userVerifyFailed()
  } else {
    when.other()
  }
}

export const refreshBoardData = async () => {
  boardData = await getDb('boardData')
  boardDataHash = Md5.hashStr(JSON.stringify(boardData))
}

const getAvailableUid = async (): Promise<number> => {
  const { uidBindInfo } = getOptions() as any
  let isNoneUidAvailable = true

  while (isNoneUidAvailable) {
    for (const uid of uidList as number[]) {
      if (uidBindInfo[uid].tokenCooldown > getTimestamp()) {
        continue
      }
      isNoneUidAvailable = false
      const availableUid = uid
      return availableUid
    }
    await delay(300)
  }

  return uidList[0]
}

const paintLoop = async () => {
  const { uidBindInfo, lastPixelPaintPosition } = getOptions() as any
  const imgData = await getDb('imgData')
  await refreshBoardData()

  console.log(
    `[绘制] 上一个成功绘制的像素的位置 x：${lastPixelPaintPosition.x} y：${lastPixelPaintPosition.y} imgX：${lastPixelPaintPosition.imgX} imgY：${lastPixelPaintPosition.imgY}`,
  )

  let imgY = lastPixelPaintPosition.imgY ?? 0
  let imgX = lastPixelPaintPosition.imgX ?? 0

  for (imgY; imgY < imgSize.h; imgY++) {
    for (imgX; imgX < imgSize.w; imgX++) {
      if (getOptions().isStopped) {
        return
      }

      if ((getOptions().generateBoardDataCooldown as number) < getTimestamp()) {
        if (
          !getOptions().isExemptionBoardDataExpirationTime &&
          (getOptions().boardDataExpirationTime as number) < getTimestamp()
        ) {
          await generateBoardData()
        } else {
          generateBoardData()
        }

        refresh.generateBoardDataCooldown()
        refresh.boardDataExpirationTime()
      }

      const x = imgX + imgPaintPosition.x
      const y = imgY + imgPaintPosition.y
      const imgPixel = imgData[imgY][imgX]
      const boardPixel = boardData[x][y]

      if (
        detectPixel.opacity(imgPixel) ||
        detectPixel.priority(boardPixel) ||
        detectPixel.same(imgPixel, boardPixel)
      ) {
        continue
      }

      const uid = await getAvailableUid()
      const { token } = uidBindInfo[uid]

      if (getOptions().isStopped) {
        return
      }

      refresh.tokenCooldown(uid)

      paint(x, y, imgPixel.color, uid, token, imgX, imgY, boardPixel.color)
    }
    imgX = 0
  }

  await delay(5000)
  refresh.lastPixelPaintPosition(0, 0, 0, 0)
  await delay(5000)
  paintLoop()
}

export const startPaintLoop = () => {
  getOptions().isStopped = false
  console.log('[绘制] 开始绘制')
  paintLoop()
}

export const stopPaintLoop = () => {
  getOptions().isStopped = true
  console.log('[绘制] 停止绘制')
}
