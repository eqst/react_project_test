import React from "react"
import ReactDOM from "react-dom"
import store from "./redux/store"   //将stroe传递给父元素,以使子组件可以接收
import {Provider} from "react-redux"
import App from "./App"

ReactDOM.render(
  //Provider让所有组件都可以得到state数据
<Provider store = {store}>
  <App/>
</Provider>
,document.getElementById("root"))