<template>
  <div>child</div>
  <div>{{msg}}</div>
  <button @click="emitxxx">button</button>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'my-child',
  props: ['msg'],

  beforeCreate(){
    console.log('beforeCreate');
  },

  mounted(){
    console.log('mounted');
  },

  // setup 在beforeCreate前执行了，且就执行了一次
  // setup执行时，当前组件还未创建处理，即组件实例对象this目前不能用
  // 在vue3中尽量不要混合的使用data和setup及methods和setup，在setup中不能访问data和methods
  // 若有重名，setup优先
  // setup不能是一个async函数，

  // setup参数：
  // props:里面有父级组件向子级组件传递的数据，且是在子级组件中使用props接收到的所有属性
  // context：包含attrs（包含当前组件标签上的所有属性的对象，但该属性在props中没有声明接收的）,emit方法(分发事件)，slot对象（插槽）
  setup(props,context,){
    console.log('setup执行了',this);
    console.log('props',props);
    console.log('context',context);
    
    function emitxxx(){
      context.emit('xxx','++')
    }
    return {
      emitxxx
      // setup返回一个对象，对象中的属性和方法是给html使用的
    }
  }
})
</script>

<style>
</style>