// shallowReactive(浅的监视)与reactive(深的)

const { reactive } = require("vue")

const reactiveHandler = {
  // 获取属性值
  get(target,prop){
    return Reflect.get(target,prop) 
  },
  // 删除属性值或者添加属性
  set(target,prop,value){
    return Reflect.set(target,prop,value)
  },
  // 删除某个属性
  deleteProperty(target,prop){
    return Reflect.deleteProperty(target,prop)
  }
}

function ahsllowReactive(target){
  // 对象/数组
  if(target&&typeof target==='object'){
    return new Proxy(target,reactiveHandler)
  }

  // 基本数据类型
  return target
}

// 深度监听
function reactive(target){
  // 对象/数组
  if(target&&typeof target==='object'){
    // 递归处理
    if(Array.isArray(target)){
      target.forEach((item,index)=>{
        target[index]=reactive(item)
      })
    } else {
      Object.keys(target).forEach((key)=>{
        target[key] = reactive(target[key])
      })
    }
  }

  // 基本数据类型
  return target

}