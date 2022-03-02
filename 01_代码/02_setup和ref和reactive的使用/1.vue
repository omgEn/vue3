<template>
  <div>setup和ref的基本使用</div>
  <h1 @click="updateCount">{{count}}</h1>
  <hr/>
  <div>{{user.name}}</div>
  <div>{{user.wifi.name}}</div>
  <div>{{user.wifi.cars[0]}}</div>  
  <div>{{user}}</div>
  <button @click="updateUser">button</button>

</template>

<script lang='ts'>
import {defineComponent,reactive,ref} from 'vue'

export default defineComponent({
  name: 'App',

  // setup是组合API的入口函数
  // ref是用来定义一个基本类型的响应式数据
  setup(){
    const count = ref(0)
    console.log(count);
    function updateCount(){
      count.value++
    }
    // const proxy = reactive(obj):接收一个普通对象然后返回该普通对象的响应式代理器对象
    // 响应式转换是“深层的”：会影响对象内部所有嵌套的属性
    // reactive基于Proxy的实现，通过代理对象操作源对象内部数据都是响应式
    // 把数据变成响应式数据


    const obj:any = {
      name: '小米',
      age: 20,
      wifi: {
        name: '笑笑',
        age: 18,
        cars: ['df','d']
      }
    }
    // user是代理对象，obj是目标对象
    // user是Proxy
    const user = reactive(obj)
    console.log(user);
    

    const updateUser=()=>{
      // user.name+='=='
      // user.wifi.name+='++'
      // user.wifi.cars[0]+='=='
      user.wifi.cars[3]='BYD'

      // // 不会生效
      // obj.name+='--'

      user.gender = '男'
      obj.gender = '男'
      // delete user.wifi.age
      // delete obj.age
      console.log(obj,user);

      //总结： 若想更改数据时，页面跟着刷新。则操作代理对象
      // 通过当前的代理对象找到该对象中的某个属性，更改该属性中
    }

    return {
      count,
      updateCount,
      user,
      updateUser
    }
  }
})
</script>

<style>

</style>