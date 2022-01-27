import { combineReducers } from "redux";
import userReducer from "./user.reducer";

// Regroupe l'intégralité des reducers, permettre d'intégrer les reducers d'éditions de transactions

export default combineReducers({
  userReducer,
});
