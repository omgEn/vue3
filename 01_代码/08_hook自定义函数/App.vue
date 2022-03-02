<template>
  <div>自定义hook函数</div>
  <h2>x:{{x}},y:{{y}}</h2>
  <h3 v-if="loading">正在加载中...</h3>
  <h3 v-else-if="errorMsg">错误信息：{{errorMsg}}</h3>

  <ul v-else>
    <li></li>
  </ul>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import useMousePosition from './hooks/useMousePosition'
import useRequest from './hooks/useRequest'


const json = [
  {}
]

export default defineComponent({
  name: 'App',
  
  setup(){
    const {x,y} = useMousePosition()

    const {loading,data,errorMsg} = useRequest('33')
 
    return {
      x,y,loading,data,errorMsg
    }
  }
})
</script>

<style>
</style>