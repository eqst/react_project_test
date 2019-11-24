import {createStore} from "redux" // 引入createstroe用于创建最核心的stroe对象
import reducer from "./reducer"   //用于引入reducer
export default createStore(reducer)