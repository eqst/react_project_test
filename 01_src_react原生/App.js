import React,{Component} from 'react'

export default class App extends Component{
  state = {
    count:0
  }
  //创建加法函数
  increment = () => {
    let {count} = this.state
    let {value} = this.refs.selectNumber
    this.setState({count:count + value*1})
  }
  //创建减法函数
  decrement = () => {
    let {count} = this.state
    let {value} = this.refs.selectNumber
    this.setState({count:count - value*1})
  }
  //创建奇数加法函数
  incrementodd = () => {
    let {count} = this.state
    let {value} = this.refs.selectNumber
    if (count%2 === 1 || count%2 === -1) {
      this.setState({count:count + value*1})
    }
  }
  //创建延时加法函数
  incrementdeply = () => {
    let {count} = this.state
    let {value} = this.refs.selectNumber
    setTimeout(() => {
      this.setState({count:count + value*1})
    }, 1000);
  }
  render(){
    return(
      <div>
  <h3>当前计数为{this.state.count}</h3>
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