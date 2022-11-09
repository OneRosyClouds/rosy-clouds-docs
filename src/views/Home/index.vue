<script lang='ts' setup>
import {} from 'vue'
</script>

<template>
  <div class="w-screen h-screen relative ">
    <img src="../../assets/logo.png" class="w-600px cen o1" alt="">
    <img src="../../assets/h.png" class="w-600px cen o2" alt="">
    <img src="../../assets/sub.png" alt="" class="w-700px cen o3">
  </div>
</template>

<style lang='scss' scoped>
.cen {
  position: absolute;
  left: 50%;

}
.o1 {
  transform: translate(-50%, 15vh);
}

.o2 {
  transform: translate(-50%, 60vh);
}

.o3 {
  transform: translate(-50%, 80vh);
}
</style>
