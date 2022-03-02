<template>
<div class='todo-footer'>
  <label for="">
    <input type="checkbox" v-model='isCheckAll'>
  </label>
  <span><span>已完成 {{count}}</span>/全部{{todos.length}}</span>
  <button class='btn btn-danger' @click="clearAllCompletedTodos">清除已完成任务</button>
</div>
</template>

<script lang='ts'>
import { defineComponent,computed } from 'vue'
import {Todo} from '../types/todo'

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Footer',
  props: {
    todos: {
      type: Array as ()=>Todo [],
      require: true
    },
    checkAll: {
      type: Function,
      required: true
    },
    clearAllCompletedTodos: {
      type: Function,
      required: true
    }
  },
  setup(props){
    
    const count = computed(()=>{
      return (props.todos||[]).reduce((pre,todo)=>pre+(todo.isCompleted?1:0),0)
    })

    const isCheckAll = computed({
      get(){
        return count.value&&(props.todos||[]).length===count.value
      },
      set(val){
        props.checkAll(val)
      }
    })

    return {
      count,
      isCheckAll
    }
  }
})
</script>

<style scoped>
</style>