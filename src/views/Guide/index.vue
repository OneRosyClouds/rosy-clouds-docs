<script lang='ts' setup>
import {} from 'vue'
</script>

<template>
  <div class="w-screen h-screen relative">
    <div class="cen sh w-70vw  h-80vh overflow-auto rounded-2xl p-6">
      <h2>介绍</h2>
      <p>
        这是一份来自彩霞的动画库，作者觉得在一个项目中最简单能拿住用户心的点就在于流畅的交互和恰到好处的过渡动画，所以就有了这个库，希望能帮助到大家。
      </p>
      <p>
        本库支持使用原生 <span>css</span> 动画，<span>js函数</span> 调用执行动画，以及使用 vue3 的 <span>transition</span> 组件实现动画。
      </p>
      <h2>使用</h2>
      <p align="center">
        <span>pnpm install @rosy-clouds/core</span>
      </p>
      <p>
        在你点击例子时，你的剪切板会自动的获取到类似于<span>__hover__amplify__transition</span>或者<span>__hover__amplify__css</span>的内容，其中最后的表示符<span>css</span><span>transition</span>就确切的告诉你使用的地方。
      </p>
      <p>
        <span>css</span>：即放到元素的 class 上就能使用了
      </p>
      <p>
        <span>transition</span>：即放到 vue transition 的 name 属性上就能使用了
      </p>
    </div>
  </div>
</template>

<style lang='scss' scoped>
.cen {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.sh {
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
}
h2 {
  color: #fff;
  font-weight: 800;
}

p {
  font-weight: 500;
  text-indent: 2rem;
  margin-top: 3px;
}

span {
  background-color: rgba(255, 255, 255, 0.604);
  padding: 0.2rem 0.2rem;
  border-radius: 7px;
  font-weight: 600;
  margin: 0 3px;
}
</style>
