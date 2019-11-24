import React,{Component} from 'react'
import {creatIncrementAction, creatDecrementAction } from "./redux/action_creators";

export default class App extends Component{

  componentDidMount(){
    console.log(this.props.store.count);
  }
  //创建加法函数
  increment = () => {
    let {value} = this.refs.selectNumber
    this.props.store.dispatch(creatIncrementAction(value * 1))
  }
  //创建减法函数
  decrement = () => {
    let {value} = this.refs.selectNumber
    this.props.store.dispatch(creatDecrementAction(value * 1))
  }
  //创建奇数加法函数
  incrementodd = () => {
    let {value} = this.refs.selectNumber
    let count = this.props.store.getState()
    if (count%2 === 1 || count%2 === -1) {
      this.props.store.dispatch(creatIncrementAction(value * 1))
    }
  }
  //创建延时加法函数
  incrementdeply = () => {
    let {value} = this.refs.selectNumber
    setTimeout(() => {
      this.props.store.dispatch(creatIncrementAction(value * 1))
    }, 1000);
  }
  render(){
    //获取state
    let count = this.props.store.getState()
    console.log(count)
    return(
      <div>
        <h3>当前计数为{count}</h3>
        <select ref="selectNumber">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>&nbsp;
        <button onClick = {this.increment}>+</button>&nbsp;
        <button onClick = {this.decrement}>-</button>&nbsp;
        <button onClick = {this.incrementodd}>increment if odd</button>&nbsp;
        <button onClick = {this.incrementdeply}>increment async</button>&nbsp;
      </div>
    )
  }
}