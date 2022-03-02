<template>
<div>Teleport组件介绍 </div>
<ModalButton />
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import ModalButton from './ModalButton'

export default defineComponent({
  name: 'App',
  components: {
    ModalButton
  }
})
</script>

<style>
</style>