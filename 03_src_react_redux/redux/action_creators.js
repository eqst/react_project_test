//引入防止单次错误的组件
import {DECREMENT,INCREMENT} from "./action_types"
// 将两种方法暴露出去
//创建传递函数和数据的回调
export const creatIncrementAction = value => ({type:INCREMENT,data:value})
export const creatDecrementAction = value => ({type:DECREMENT,data:value})