import { combineReducers } from "redux";
import auth from './auth'
import logInfo from './logInfo'
const rootReduces = combineReducers({
  auth,
  logInfo
})

export default rootReduces