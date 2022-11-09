<script lang='ts' setup>
import { onMounted, onUnmounted, ref, watch } from 'vue'
import animejs from 'animejs'
import { useRoute, useRouter } from 'vue-router'
interface EleInfo {
  mid: number
  el: Element
  key: string
}
const navRef = ref<HTMLElement[] | null>(null)
const boxRef = ref<HTMLElement | null>(null)
const allRef = ref<HTMLElement | null>(null)
const eleInfo = ref<EleInfo[]>([])
const route = useRoute()
const router = useRouter()

function collectEleInfo() {
  eleInfo.value.length = 0
  if (!navRef.value)
    return
  for (let i = 0; i < navRef.value.length; i++) {
    const child = navRef.value[i]
    const { height, top } = child.getBoundingClientRect()
    eleInfo.value.push({
      mid: (top + height / 2),
      el: child,
      key: child.getAttribute('data-key')!,
    })
  }
}
function dep() {
  watch(() => route.name, (val) => {
    boxToElePosition(val as string)
  }, { immediate: true })
}
function boxToElePosition(name: string) {
  if (!name)
    return
  const info = eleInfo.value.find(it => it.key === name)
  const { height } = boxRef.value!.getBoundingClientRect()

  animejs({
    targets: boxRef.value,
    top: (info!.mid - height / 2),
  })
}
function resize() {
  collectEleInfo()
  boxToElePosition(route.name as string)
}
onMounted(() => {
  collectEleInfo()
  dep()
  window.addEventListener('resize', resize)
})
onUnmounted(() => {
  window.removeEventListener('resize', resize)
})

const navList = [
  {
    title: '首页',
    index: 'Home',
  },
  {
    title: '指南',
    index: 'Guide',
  },
  {
    title: '轻动画',
    index: 'Animation',
  },
  {
    title: '过渡',
    index: 'Transition',
  },
]
</script>

<template>
  <div ref="allRef" class="absolute left-10 bottom-11 flex flex-col items-center">
    <div v-for="item in navList" :key="item.index" ref="navRef" class="font-bold text-30px z-10 py-10px cursor-pointer" :data-key="item.index" @click="router.push({ name: item.index })">
      {{ item.title }}
    </div>
  </div>
  <button ref="boxRef" class="btn absolute" />
</template>

<style lang='scss' scoped>
.btn {
  width: 167px;
  height: 63px;
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), inset -1px -6px 4px rgba(35, 18, 18, 0.21);
  border-radius: 43px;
  border: 0;
  z-index: 0;
}
</style>
