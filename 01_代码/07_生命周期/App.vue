<template>
  <div>App父级组件</div>
  <button @click="isShow=!isShow">切换显示</button>
  <myChild v-if="isShow"/>
</template>

<script lang='ts'>
import { defineComponent,ref } from 'vue'
import myChild from './myChild.vue'

export default defineComponent({
  name: 'App',
  components: {
    myChild
  },
  setup(){
    const isShow = ref(true)
    return {
      isShow
    }
  }
})
// 总结：vue3比vue2的生命周期更快
</script>

<style>
</style>