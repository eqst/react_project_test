//此为容器组件
import Counter from "../components/counter" //引入ui组件
//引入动作事件
import {creatIncrementAction,
   creatDecrementAction,
   creatIncrementActionAsync
} from "../redux/action_creators";
//解构赋值得到connect,用于将数据和动作绑定到组件中()
import {connect} from "react-redux"

//完整写法
//必须返回一个对象
// function mapStateToProps(state) {
//   return {count:state}
// }

// function mapTypeToProps(dispatch) {
//   return {
//     increment: (value) => {dispatch(creatIncrementAction(value))},
//     decrement: (value) => {dispatch(creatDecrementAction(value))},
//   }
// }

// export default connect(mapStateToProps,mapTypeToProps)(Counter)


//connect作用
export default connect(
  state => ({count:state}),
  {
    increment:creatIncrementAction,
    decrement:creatDecrementAction,
    incrementAsync:creatIncrementActionAsync
  }
)(Counter)