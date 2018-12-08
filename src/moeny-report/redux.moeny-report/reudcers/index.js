import { combineReducers } from "redux"
import { sumActionsReudcer } from "./reducers";


export default combineReducers({
  sumAct: sumActionsReudcer
})