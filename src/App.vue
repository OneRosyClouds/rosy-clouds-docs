<script lang='ts' setup>
import { } from 'vue'
import NavBar from './components/NavBar.vue'
import HeaderBar from './components/HeaderBar.vue'
document.title = '从彩霞中来'
</script>

<template>
  <div class=" w-screen h-screen my-bg">
    <HeaderBar />
    <router-view v-slot="{ Component }">
      <transition name="select_view" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
  <NavBar />
</template>

<style lang='scss' scoped>
.my-bg{
  background: linear-gradient(101.64deg, #EC80A2 0%, #ECA4A2 51.3%, #F4CFAB 100%)
}

.select_view-enter-active, .select_view-leave-active {
  transition-property: all;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
}
.select_view-enter-from {
  transform: translateY(-300px) scale(0.8,0.8);
  opacity: 0;
}
.select_view-enter-to {
  transform: translateY(0) scale(1,1);
  opacity: 1;
}
.select_view-leave-from {
  transform: translateY(0) scale(1,1);
  opacity: 1;
}
.select_view-leave-to {
  transform: translateY(-300px) scale(0.8);
  opacity: 0;
}
</style>
