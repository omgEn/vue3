import {onBeforeMount,onMounted,ref} from 'vue'

// 需求：用户点击页面，把点击位置的横纵坐标收集起来并展示
export default function(){
  const x = ref(-1)
  const y = ref(-1)

  // 点击事件的回调函数
  const clickHandler = (event:MouseEvent)=>{
    x.value = event.pageX;
    y.value = event.pageY
  }

  onMounted(()=>{
    window.addEventListener('click',clickHandler)
  })

  onBeforeMount(()=>{
    window.removeEventListener('click',clickHandler)
  })

  return {x,y}
}