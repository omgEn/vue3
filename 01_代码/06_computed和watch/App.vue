<template>
  <div>计算属性和监视</div>
  <fieldset>
    <legend>姓名操作</legend>
  姓氏:<input placeholder="请输入姓氏" v-model="user.firstName"/><br/>
  名字：<input placeholder="请输入名字" v-model="user.lastName"/><br/>
  姓名：<input placeholder="显示名字" v-model="fullName"/><br/>
  姓名：<input placeholder="显示名字" v-model="fullName2"/><br/>
  姓名：<input placeholder="显示名字" v-model="fullName3"/><br/>
  </fieldset>
</template>

<script lang='ts'>
import { defineComponent,ref,reactive,computed,watch,watchEffect } from 'vue'
export default defineComponent({
  name: 'App',

  setup(){
    const user = reactive({
      firstName: '东方',
      lastName: '不败'
    })


    // 返回的是ref类型的对象
    const fullName = computed(()=>{
      return user.firstName+'_'+user.lastName
    })
    
    const fullName2 = computed({
      get(){
        return user.firstName+'_'+user.lastName
      },
      set(val:string){
        const names = val.split('_')
        user.firstName = names[0]
        user.lastName = names[1]
      }
    })

    const fullName3 = ref('')

    // watch(user,({firstName,lastName})=>{
    //   fullName3.value = firstName+'___'+lastName
    // },{immediate: true,deep:true})

    // 监视,默认immediate:true，
    watchEffect(()=>{
      fullName3.value = user.firstName+'___'+user.lastName
    })

    watchEffect(()=>{
      const names = fullName3.value.split('_')
      user.firstName = names[0]
      user.lastName = names[1]
    })

    return {
      user,
      fullName,
      fullName2,
      fullName3
    }
  }
})
</script>

<style>
</style>