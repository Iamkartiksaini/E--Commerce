import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

const user = (state = { username: "kartik", class: "12th" }, action) => {
  if (action.type === "updateName") {
    return { ...state, username: action.name };
  }
  return { ...state };
};
const rootReducers = combineReducers({
  user,
});
const store = createStore(rootReducers, applyMiddleware(thunk));
export default store;
