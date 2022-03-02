<template>
<div class="todo-container">
  <div class="todo-wrap">
    <Header :addTodo="addTodo"/>
    <List :todos="todos" :deleteTodo="deleteTodo" :updateTodo='updateTodo'/>
    <Footer :todos="todos" :checkAll="checkAll" :clearAllCompletedTodos="clearAllCompletedTodos"/>
  </div>
  
</div>
</template>

<script lang='ts'>
import { defineComponent, onMounted, reactive,toRefs,watch } from 'vue'
import Header from './components/Header.vue'
import List from './components/List.vue'
import Footer from './components/Footer.vue'
import {Todo} from './types/todo'
import {saveTodos,readTodos} from './utils/localStorageUtils'



export default defineComponent({
  name: 'App',
  components: {
    Header,
    List,
    Footer
  },
  setup(){
    const state = reactive<{todos:Todo[]}>({
      todos: [
        {id:1,title:'1',isCompleted: false},
        {id:2,title:'2',isCompleted: false},
        {id:3,title:'3',isCompleted: false},
      ]
      // todos: []
    })

    onMounted(()=>{
      setTimeout(()=>{
        // state.todos = readTodos()
      },2000)
    })

    // 添加数据的方法
    const addTodo = (todo:Todo)=> {
      state.todos.unshift(todo)
    }

    // 删除数据
    const deleteTodo = (index:number)=>{
      state.todos.splice(index,1)
    }

    // 修改todo的isCompleted属性的状态
    const updateTodo = (todo:Todo,isCompleted:boolean)=>{
      todo.isCompleted = isCompleted
    }

    // 清理所有选中的数据
    const clearAllCompletedTodos = ()=>{
      state.todos = (state.todos||[]) .filter(todo=>!todo.isCompleted)
    }


    // 全选或全不选的方法
    const checkAll = (isCompleted:boolean)=>{
      state.todos.forEach(todo=>{
        todo.isCompleted = isCompleted
      })
    }

    // 监视操作：若todos数组的数据变化了，直接存储到浏览器的缓存中
    // watch(()=>state.todos,saveTodos,{deep:true})

    return {
      ...toRefs(state),
      addTodo,
      deleteTodo,
      updateTodo,
      checkAll,
      clearAllCompletedTodos
    }
  }
})
</script>

<style>
</style>