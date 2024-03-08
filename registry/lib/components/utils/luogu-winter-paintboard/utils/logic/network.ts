const createXhrPaint = async (x: number, y: number, color: string, uid: number, token: string) =>
  new Promise((resolve, reject) => {
    return unsafeWindow.bilibiliEvolved.monkeyApis.GM_xmlhttpRequest({
      method: 'POST',
      url: 'https://www.oi-search.com/paintboard/paint',
      data: `x=${x}&y=${y}&color=${color}&uid=${uid}&token=${token}`,
      timeout: 60000,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      onload(response) {
        resolve(response)
      },
      ontimeout(response) {
        reject(response)
      },
      onabort(response) {
        reject(response)
      },
      onerror(response) {
        reject(response)
      },
    })
  })

const createXhrBoard = async () =>
  new Promise((resolve, reject) => {
    return unsafeWindow.bilibiliEvolved.monkeyApis.GM_xmlhttpRequest({
      method: 'GET',
      url: 'https://www.oi-search.com/paintboard/board',
      timeout: 60000,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      onload(response) {
        resolve(response)
      },
      ontimeout(response) {
        reject(response)
      },
      onabort(response) {
        reject(response)
      },
      onerror(response) {
        reject(response)
      },
    })
  })

export const network = {
  // 获取版面
  board: createXhrBoard,
  // 绘画操作
  paint: createXhrPaint,
}
