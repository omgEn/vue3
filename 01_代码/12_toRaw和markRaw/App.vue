<template>
<div>toRaw和markRaw</div>
<h3>state:{{state}}</h3>
<hr>
<button @click="testToRaw">toRaw</button>
<button @click="testMarkRaw">testMarkRaw</button>
</template>

<script lang='ts'>
import { defineComponent, reactive,toRaw,markRaw } from 'vue'

interface UserInfo {
  name: string;
  age: number;
  likes?:string[];
}


export default defineComponent({
  name: 'App',
  setup(){
    const state = reactive<UserInfo>({
      name: '小米',
      age: 29
    })

    const testToRaw = ()=>{
      console.log('testToRaw');
      // 把代理对象变成普通对象，数据变化，界面不响应
      const user = toRaw(state)
      user.name+='=='
      
    }

    const testMarkRaw = ()=>{
      console.log('testMarkRaw');
      const likes = ['eat','drink']
      
      // markRaw标记的对象数据，以后都不能再成为代理对象
      state.likes = markRaw(likes)
      setInterval(()=>{
        if(state.likes){
          state.likes[0]+="=="
        }
      },1000)

    }

    return {
      state,
      testToRaw,
      testMarkRaw
    }
  },
})
</script>

<style>
</style>