import {createStore, applyMiddleware} from "redux" // 引入createstroe用于创建最核心的stroe对象
import reducer from "./reducer"   //用于引入reducer
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension";
export default createStore(reducer,composeWithDevTools(applyMiddleware(thunk)))