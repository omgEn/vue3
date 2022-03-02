<template>
  <div>shallowReactive和shallowRef</div>
  <h3>m1:{{m1}}</h3>
  <h3>m2:{{m2}}</h3>
  <h3>m3:{{m3}}</h3>
  <h3>m4:{{m4}}</h3>
  <button @click="update">button</button>
</template>

<script lang='ts'>
import { defineComponent,reactive, shallowReactive, shallowRef,ref } from 'vue'
export default defineComponent({
  name: 'App',

  setup(){
    const obj = {
      name: '鸣人',
      age: 20,
      car: {
        name: 'car1',
        color: 'red'
      }
    }
    const obj2 = JSON.parse(JSON.stringify(obj))
    const m1 = reactive(obj2)
    const m2 = shallowReactive({
      name: '鸣人',
      age: 20,
      car: {
        name: 'car1',
        color: 'red'
      }
    })
    const m3 = ref({
      name: '鸣人',
      age: 20,
      car: {
        name: 'car1',
        color: 'red'
      }
    })
    const m4 = shallowRef({
      name: '鸣人',
      age: 20,
      car: {
        name: 'car1',
        color: 'red'
      }
    })

    const update = ()=>{
      m1.car.name+='=='
      m2.car.name+='=='
      m2.name+='=='
      m3.value.car.name+='=='
      m4.value.car.name+='=='
    }


    return {
      m1,m2,m3,m4,update
    }
  }
})
</script>

<style>
</style>