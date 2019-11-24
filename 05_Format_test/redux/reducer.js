//引入函数
import {INCREMENT,DECREMENT} from './action_types'
//初始化状态,为了使其中每个判断语句都可以拿到此状态,将其定义在全局
let initState = 0;
//创建检验数据的函数
export default function perambulateCount(previousState = initState,action) {
  //由于action中有type和data
  const {type,data} = action;
  //定义更新后的变量,规则规定不想允许改变旧的状态
  let newState
  //判断调用的函数
  switch (type) {
    case INCREMENT:
      newState = previousState + data
      console.log(newState)
      return newState
    case DECREMENT:
        newState = previousState - data
        console.log(newState)
        return newState
    default:
      return previousState
  }
}