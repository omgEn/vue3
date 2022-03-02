<template>
<li @mouseenter='mouseHandler(true)' @mouseleave='mouseHandler(false)' :style="{backgroundColor: bgColor,color:myColor}">
  <label for="">
    <input type="checkbox" v-model="isCompleted">
    <span>{{todo.title}}</span>
  </label>
  <button class='btn btn-danger' v-show='isShow' @click="delTodo">删除</button>
</li>
</template>

<script lang='ts'>
import { defineComponent,ref,computed } from 'vue'
import {Todo} from '../types/todo'

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Item',
  props: {
    todo:{
      type: Object as ()=>Todo,
      required: true
    },
    deleteTodo: {
      type: Function,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
    updateTodo: {
      type: Function,
      required: true
    }
    
  },
  setup(props,context){
    console.log(props,context);
    
    // 背景色
    const bgColor = ref('white')
    // 前景色
    const myColor= ref('black')
    const isShow = ref(false)

    

    // 鼠标进入和离开事件的回调函数
    const mouseHandler = (flag:boolean)=>{
      if(flag){
        // 鼠标进入
        bgColor.value = 'pink'
        myColor.value = 'green'
        isShow.value = true
      } else{
        // 鼠标离开
        bgColor.value = 'white'
        myColor.value = 'black'
        isShow.value = false
      }
    }

    const delTodo = ()=>{
      console.log(props);
      
      if(window.confirm('确定删除吗')){
        props.deleteTodo(props.index)
      }
    }

    // 
    const isCompleted = computed({
      get(){
        return props.todo.isCompleted
      },
      set(val){
        props.updateTodo(props.todo,val)
      }
    })

    
    return {
      bgColor,
      myColor,
      isShow,
      delTodo,
      mouseHandler,
      isCompleted
    }
  },
})
</script>

<style scoped>
li {
  display: flex;
  justify-content: space-between;
}
</style>