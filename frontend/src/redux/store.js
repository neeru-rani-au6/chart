import { createStore, combineReducers, applyMiddleware } from "redux";
import userReducer from "./reducer/user";
import DataReducer from "./reducer/data";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  userState: userReducer,
  DataReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
