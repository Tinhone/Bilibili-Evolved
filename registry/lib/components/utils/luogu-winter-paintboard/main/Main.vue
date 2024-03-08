<template>
  <div class="all">
    <div class="clock">
      <div class="date">{{ date }}</div>
      <div class="time">{{ time }}</div>
    </div>
    <div class="start">
      <VButton :disabled="isRunning" @click="start()">开始绘制</VButton>
      <VButton :disabled="!isRunning" @click="stop()">停止绘制</VButton>
      <VButton @click="consoleDb()">输出 IndexedDB</VButton>
      <VButton @click="toggleIsExemptionBoardDataExpirationTime()"
        >切换是否豁免使用 await 等待绘板数据刷新</VButton
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { VButton } from '@/ui'
import {
  getDate,
  getTime,
  consoleDb,
  toggleIsExemptionBoardDataExpirationTime,
  console,
} from '../utils'
import { startPaintLoop, stopPaintLoop } from '../paint'

export default defineComponent({
  components: {
    VButton,
  },

  data() {
    return {
      isRunning: false,
      date: getDate(),
      time: getTime(),
      consoleDb,
      toggleIsExemptionBoardDataExpirationTime,
      // 因为模板中 @click="go()" 处的报错（虽然不影响运行），于是把 go 方法移到了这里
      start() {
        this.isRunning = true
        startPaintLoop()
      },
      stop() {
        this.isRunning = false
        stopPaintLoop()
      },
    }
  },

  mounted() {
    console.log('时钟开始运行')
    setInterval(() => {
      this.date = getDate()
      this.time = getTime()
    }, 500)
  },
})
</script>
