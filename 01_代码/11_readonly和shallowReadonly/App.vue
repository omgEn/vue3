<template>
<div>readonly和shallowReadonly</div>
<div>state:{{state}}</div>
<div>state2:{{state2}}</div>
<div>state3:{{state3}}</div>
<button @click="update">button</button>
</template>

<script lang='ts'>
import { defineComponent,readonly, shallowReadonly } from 'vue'
export default defineComponent({
  name: 'App',
  setup(){
    const state = {
      name: '鸣人',
      age: 20,
      car: {
        name: 'car1',
        color: 'red'
      }
    }

    const state2 = readonly(state)

    const state3 = shallowReadonly(state)
    const update = ()=>{
      // state2.name+='=='
      // state2.car.name=''
      // state3.name+=''
      state3.car.name=''
      console.log('state3',state3);
      
    }

    return {
      state,update,state2,state3
    }
  }
})
</script>

<style>
</style>