import { combineReducers } from "redux";
import { fetchBookReducer } from "./reducers";


export default combineReducers({
  books:fetchBookReducer,
  
});