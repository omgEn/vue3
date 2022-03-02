<template>
  <div>{{msg}}</div>

  <myChild :msg="msg" msg2='33' @xxx="xxx"/>
</template>

<script lang='ts'>
import { defineComponent,ref } from 'vue'
import myChild from './components/my-child.vue'
export default defineComponent({
  name: 'App',
  components: {
    myChild
  },
  
  setup(props,context){
    console.log('app',props,context);
    
    const msg = ref('message')
    function xxx(txt:string){
      msg.value+=txt
    }
    return {msg,xxx}
  }
})
</script>

<style>
</style>