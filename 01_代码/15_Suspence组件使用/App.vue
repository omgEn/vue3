<template>
<div>vue-Suspence:允许程序在等待异步组件渲染时渲染一些后备内容</div>
<AsyncComponent />
<Suspence>
  <template #default>
    <AsyncComponent />
  </template>
  <template v-slot:fallback>
    <h2>Loading</h2>
  </template>
  
</Suspence>

</template>

<script lang='ts'>
import { defineComponent,defineAsyncComponent } from 'vue'

// vue2中动态引入组件的写法
const AsyncComponent =defineAsyncComponent(()=>import('./AsyncComponent.vue'))
export default defineComponent({
  name: 'App',
  components: {
    AsyncComponent
  },
  setup(){
    return {
     

    }
  },
})
</script>

<style>
</style>