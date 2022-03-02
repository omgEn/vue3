import axios from 'axios'
import {ref} from 'vue'

// 发送ajax的请求
export default function<T>(url:string){
  const loading = ref(true)
  const data = ref<T|null>(null)
  const errorMsg = ref('')

  axios.get(url).then(response=>{
    // 改变加载状态
    loading.value = false
    data.value = response.data
  }).catch(error=>{
    loading.value = false
    errorMsg.value = error.message||'未知错误'
  })
  
  return {
    loading,
    data,
    errorMsg
  }
}