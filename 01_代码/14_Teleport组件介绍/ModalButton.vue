<template>
<div>
  <button @click="modalOpen=true">
    打开一个对话框
  </button>

  <Teleport to="body">
    <div v-if="modalOpen">
      对话框
      <button @click="modalOpen=false"> 关闭对话框</button>
    </div>
  </Teleport>
</div>
</template>

<script lang='ts'>
import { defineComponent,ref } from 'vue'


export default defineComponent({
  name: 'ModalButton',
  setup(){
    const modalOpen = ref(false)
    return {modalOpen}
  },
})
</script>

<style>
</style>