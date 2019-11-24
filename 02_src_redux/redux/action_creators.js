import {DECREMENT,INCREMENT} from "./action_types"
// 将两种方法暴露出去
export const creatIncrementAction = value => ({type:INCREMENT,data:value})
export const creatDecrementAction = value => ({type:DECREMENT,data:value})