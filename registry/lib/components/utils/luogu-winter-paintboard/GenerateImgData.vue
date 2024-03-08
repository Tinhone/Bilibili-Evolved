<template>
  <canvas id="canvas" style="display: none"></canvas>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { pickFile } from '@/core/file-picker'
import { console, rgb2Hex, getOptions, setDb } from './utils'
import { delay } from '@/core/utils'

export default defineComponent({
  mounted() {
    this.init()
  },

  methods: {
    async init() {
      const imgFile = await pickFile({ accept: 'image/png' })

      const reader = new FileReader()
      reader.readAsDataURL(imgFile[0])
      reader.onload = async () => {
        console.log('[图片数据] 图片文件 Base64 数据加载完成', reader.result)

        const imgElement = new Image()
        imgElement.src = reader.result as string

        // 没这个delay的话会导致 ctx.drawImage 画不出来，猜测是因为上面的 imgElement.src 没装填好
        await delay(1000)

        const canvas = this.$el as HTMLCanvasElement
        const ctx = canvas.getContext('2d')

        const { imgSize } = getOptions() as any

        canvas.width = imgSize.w
        canvas.height = imgSize.h

        ctx.drawImage(imgElement, 0, 0, imgSize.w, imgSize.h)

        const imgRawData = ctx.getImageData(0, 0, imgSize.w, imgSize.h)
        console.log('[图片数据] Canvas 数据加载完成', imgRawData)

        const imgDataSaveTemp: any = []

        for (let y = 0; y < imgSize.h; y++) {
          imgDataSaveTemp[y] = []
          for (let x = 0; x < imgSize.w; x++) {
            // 参见 https://developer.mozilla.org/zh-CN/docs/Web/API/ImageData/data
            // 数据为 R, G, B, A, R, G, B, A, R, G, B, A 循环
            // 0~3 切作一份，4~7 切作一份，8~11 切作一份，以此类推
            // slice 不会把 0~4、4~8、8~12 中的 4、8、12 也就是最后一位算入捕获的字符串中
            const pixel = new Array(
              ...imgRawData.data.slice(x * 4 + y * imgSize.w * 4, x * 4 + y * imgSize.w * 4 + 4),
            )
            imgDataSaveTemp[y][x] = {
              color: rgb2Hex(pixel[0], pixel[1], pixel[2]),
              opacity: pixel[3],
            }
          }
        }

        console.log('[图片数据] 成功生成图片数据')
        await setDb('imgData', imgDataSaveTemp)
        console.log('[图片数据] 图片数据已储存')
      }
    },
  },
})
</script>
