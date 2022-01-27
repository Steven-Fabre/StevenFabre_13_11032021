import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import combineReducer from "./redux/reducers";
import { loadFromLocalStorage } from "./services/localStorage";

const store = createStore(combineReducer, loadFromLocalStorage(), composeWithDevTools(applyMiddleware(thunk)));

export default store;
