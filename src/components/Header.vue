<template>
<div class="todo-header">
  <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="title" @keyup.enter="add">
</div>
</template>

<script lang='ts'>
import { defineComponent,ref } from 'vue'
export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Header',
  props: {
    addTodo: {
      type: Function,
      required: true
    }
  },
  setup(props){
    const title = ref('');
    const add = ()=>{
      // 获取文本框中输入的数据，判断不为空
      const text = title.value
      if(!text.trim()) return
      const todo = {
        id: Date.now(),
        title: text,
        isCompleted: false
      }
      // 调用addTodo的方法
      props.addTodo(todo)

      // 清空文本框
      title.value = ''

    }
    return {
      title,
      add
    }
  },
})
</script>

<style scoped>
.todo-header input {
  width: 560px;
  height: 28px;
  border: 1px solid #ccc;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
}
</style>