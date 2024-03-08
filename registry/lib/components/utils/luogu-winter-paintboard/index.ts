import { defineComponentMetadata } from '@/components/define'
import { fullyLoaded } from '@/core/life-cycle'
import { mountVueComponent } from '@/core/utils'
import { getOptions } from './utils'
import { uidList, uidBindInfo } from './data'

const kebabName = 'luogu-winter-paintboard'

const camelName = 'luoguWinterPaintboard'

const name = camelName

const displayName = '洛谷冬日绘版'

const tags = [componentsTags.utils]

const entry = () => {
  document.title = '洛谷冬日绘版 - Bilibili-Evolved - bilibili.com'

  getOptions().uidList = uidList
  getOptions().uidBindInfo = uidBindInfo
  getOptions().imgSize = JSON.parse(getOptions().imgSizeInput as string)
  getOptions().imgPaintPosition = JSON.parse(getOptions().imgPaintPositionInput as string)

  fullyLoaded(async () => {
    document.querySelector('div.error-container').remove()

    const generateImgData = await import('./GenerateImgData.vue')
    const generateImgDataVm = mountVueComponent(generateImgData)
    document.body.appendChild(generateImgDataVm.$el)

    const main = await import('./main/Main.vue')
    const mainVm = mountVueComponent(main)
    document.body.appendChild(mainVm.$el)
  })
}

const options = {
  // boardData 现存于 IndexDB 中
  // boardData: {
  //   displayName: '绘板版面数据',
  //   defaultValue: [],
  //   hidden: true,
  // },
  // imgData 现存于 IndexDB 中
  // imgData: {
  //   displayName: '图片数据',
  //   defaultValue: [],
  //   hidden: true,
  // },
  imgSizeInput: {
    displayName: '图片宽度',
    defaultValue: '{ "w": 10, "h": 10 }',
  },
  imgPaintPositionInput: {
    displayName: '图片绘制位置',
    defaultValue: '{ "x": 0, "y": 0 }',
  },
  imgSize: {
    displayName: '实际使用的图片宽度设置',
    defaultValue: { w: 10, h: 10 },
    hidden: true,
  },
  imgPaintPosition: {
    displayName: '实际使用的图片绘制位置设置',
    defaultValue: { x: 0, y: 0 },
    hidden: true,
  },
  uidList: {
    displayName: 'uid 列表',
    defaultValue: [],
    hidden: true,
  },
  uidBindInfo: {
    displayName: 'uid 绑定的信息，比如 token 和 token 的绘制冷却时间',
    defaultValue: {},
    hidden: true,
  },
  lastPixelPaintPosition: {
    displayName: '上一个成功绘制的像素的位置',
    defaultValue: { x: 0, y: 0 },
    hidden: true,
  },
  generateBoardDataCooldown: {
    displayName: '刷新绘版板面数据的冷却时间',
    defaultValue: 0,
    hidden: true,
  },
  boardDataExpirationTime: {
    displayName: '绘版板面数据的过期时间，用于确定是否使用 await 等待绘板数据刷新',
    defaultValue: 0,
    hidden: true,
  },
  isStopped: {
    displayName: '是否停止绘制',
    defaultValue: false,
    hidden: true,
  },
  isExemptionBoardDataExpirationTime: {
    displayName: '是否豁免使用 await 等待绘板数据刷新',
    defaultValue: false,
    hidden: true,
  },
}

const instantStyles = [
  {
    name: `${kebabName}--style--main`, // style 标签 id
    style: () => import('./main/main.scss'),
    important: true,
  },
]

const author = {
  name: 'Tinhone',
  link: 'https://github.com/Tinhone',
}

const urlInclude = ['https://www.bilibili.com/Bilibili-Evolved/luogu-winter-paintboard']

export const component = defineComponentMetadata({
  name,
  displayName,
  tags,
  entry,
  options,
  instantStyles,
  author,
  urlInclude,
})
