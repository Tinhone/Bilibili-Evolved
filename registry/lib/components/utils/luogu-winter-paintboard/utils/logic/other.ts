import { useScopedConsole } from '@/core/utils/log'
import { getOptions } from './storage'

export const console = useScopedConsole('洛谷冬日绘版')

/** 返回毫秒级时间戳 */
export const getTimestamp = (): number => {
  return Math.round(performance.timeOrigin + performance.now())
}

/** 返回年月日 */
export const getDate = (): string => {
  const now = new Date(getTimestamp())
  const year = String(now.getFullYear()).padStart(2, '0')
  const month = String(now.getMonth() + 1).padStart(2, '0') // 返回的是基于 0 的值（0 表示一年中的第一月）
  const date = String(now.getDate()).padStart(2, '0')
  return `${year}/${month}/${date}`
}

/** 返回时分秒 */
export const getTime = (): string => {
  const now = new Date(getTimestamp())
  const hours = String(now.getHours()).padStart(2, '0')
  const minutes = String(now.getMinutes()).padStart(2, '0')
  const seconds = String(now.getSeconds()).padStart(2, '0')
  return `${hours}:${minutes}:${seconds}`
}

/** 十进制转十六进制 */
export const dec2Hex = (dec: number): string => {
  const hex = dec.toString(16)
  const fill = hex.padStart(2, '0') // 缺少十位的零时补齐
  return fill
}

/** RGB 颜色码转十六进制颜色码 */
export const rgb2Hex = (r: number, g: number, b: number): string => {
  return `${dec2Hex(r)}${dec2Hex(g)}${dec2Hex(b)}`
}

export const refresh = {
  tokenCooldown(uid: number) {
    getOptions().uidBindInfo[uid].tokenCooldown = getTimestamp() + 29500
  },

  tokenCooldownWhenInCooldown(uid: number) {
    getOptions().uidBindInfo[uid].tokenCooldown = getTimestamp() + 200
  },

  lastPixelPaintPosition(x: number, y: number, imgX: number, imgY: number) {
    getOptions().lastPixelPaintPosition = { x, y, imgX, imgY }
  },

  generateBoardDataCooldown() {
    getOptions().generateBoardDataCooldown = getTimestamp() + 160000
  },

  generateBoardDataCooldownWhenGenerateFailed() {
    getOptions().generateBoardDataCooldown = getTimestamp() + 300000
  },

  boardDataExpirationTime() {
    getOptions().boardDataExpirationTime = getTimestamp() + 1800000
  },
}

export const detectPixel = {
  opacity(pixel: any) {
    return pixel.opacity !== 255
  },

  same(pixel: any, boardPixel: any) {
    return pixel.color === boardPixel.color
  },

  priority(boardPixel: any) {
    return boardPixel.color !== 'ffffff'
  },
}

/** 切换是否豁免使用 await 等待绘板数据刷新 */
export const toggleIsExemptionBoardDataExpirationTime = () => {
  const { isExemptionBoardDataExpirationTime } = getOptions()
  getOptions().isExemptionBoardDataExpirationTime = !isExemptionBoardDataExpirationTime
  console.log(`是否豁免使用 await 等待绘板数据刷新：${!isExemptionBoardDataExpirationTime}`)
}
