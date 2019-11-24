import React from "react"
import ReactDOM from "react-dom"
import store from "./redux/store"   //将stroe传递给父元素,以使子组件可以接收
import App from "./App"

ReactDOM.render(<App store = {store}/>,document.getElementById("root"))
//重新渲染
store.subscribe(()=>{
  ReactDOM.render(<App store={store}/>,document.getElementById('root'))
})
