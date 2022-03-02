<template>
<div>AsyncComponent子级组件</div>
<h3>{{msg}}</h3>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'AsyncComponent',
  setup(){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve({
          msg: '333'
        })
      },5000)
    })
  },
})
</script>

<style>
</style>