<template>
  <div>reactive和ref的细节问题</div>
  <h3>m1:{{m1}}</h3>
  <h3>m2:{{m2}}</h3>
  <h3>m3:{{m3}}</h3>
  <button @click="update">更新数据</button>
</template>

<script lang='ts'>
import { defineComponent,ref,reactive } from 'vue'
export default defineComponent({
  name: 'App',

  setup(){
    const m1 = ref('abc')
    const m2 = reactive({
      name: '小明',
      wifi: {
        name: '小红'
      }
    })

    // ref中放入一个对象，则是经过了reactive的处理，形成了一个Proxy类型的对象
    const m3 = ref({
      name: '小明',
      wifi: {
        name: '小红'
      }
    })
    console.log(m1,m2);
    

    const update = ()=>{
      m1.value+='==='
      m2.wifi.name+='==='
      m3.value.wifi.name+='==='
    }

    return {
      m1,m2,m3,update
    }
  }
})

/***
 * 总结：ref和reactive是vue3中最重要的响应式API
 * ref处理基本类型数据，reactive处理对象（递归深度响应式）
 * 若用ref处理对象/数组，内部会自动将对象/数组转换为reactive代理对象
 * ref内部：通过给value属性添加getter/setter实现对数据的劫持
 * reactive内部：使用Proxy实现对对象内部所有数据的劫持，并通过Reflect操作对象内部数据
 * ref的数据操作：在js中要用.value,在html模板中不需要（内部解析模板时会自动添加.value）
 * 
*/
</script>

<style>
</style>