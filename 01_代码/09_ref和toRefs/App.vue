<template>
  <div>toRefs的使用</div>
  <h3>name: {{name}}</h3>
  <h3>name: {{age}}</h3>

  <hr>
  <input type="text" ref="inputRef">
</template>

<script lang='ts'>
import { defineComponent, onMounted, reactive,toRefs,ref } from 'vue'
export default defineComponent({
  name: 'App',
  setup(){
    const state = reactive({
      name: 'df',
      age: 74
    })

    // toRefs 可把一个响应式对象转换成普通对象，该普通对象的每个property都是一个ref
    const state2 = toRefs(state)
    console.log(state2,state);
    

    setInterval(()=>{
      // state.name+='=='
    },80000)

    const inputRef = ref<HTMLElement|null>(null)
    onMounted(()=>{
      console.log(inputRef);
      
      inputRef.value&&inputRef.value.focus()
    })

    return {
      // 不是响应式数据
      // ...state
      ...state2
    }
  }
})
</script>

<style>
</style>