import { createStore } from "redux";
import produce from "immer";

const initialState = {
  isLogged: false,
  token: "",
  data: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "first":
      return { ...state, ...action };

    default:
      return state;
  }
};

export const store = createStore(reducer, initialState);

store.subscribe(() => {});
