<template>
<div>customRef的使用</div>
<input type="text" v-model="keyword">
<p>{{keyword}}</p>
</template>

<script lang='ts'>
import { defineComponent,customRef } from 'vue'
// 自定义hook防抖函数
function useDebounceRef<T>(value:T,delay=200){
  let timeOutId:number
  return customRef((track,trigger)=>{
    return {
      get(){
        track()
        return value
      },
      set(newValue:T){
        setTimeout(()=>{
          value = newValue
          trigger()
        },delay)
      }
    }
  })
}


export default defineComponent({
  name: 'App',
  setup(){
    const keyword = useDebounceRef('abc',500)
    return {
      keyword
    }
  }
})
</script>

<style>
</style> 