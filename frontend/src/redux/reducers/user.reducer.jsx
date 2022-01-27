import { GET_USER, GET_TOKEN, UPDATE_USER, LOGOUT } from "../actions/user.actions";

const initialState = {
  isLogged: false,
  isRemember: false,
  token: "",
  data: {},
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return { ...state, isLogged: true, data: action.payload };

    case GET_TOKEN:
      return { ...state, token: action.payload, isRemember: action.isRemember };

    case UPDATE_USER:
      return {
        ...state,
        data: { ...state.data, firstname: action.payload.firstname, lastName: action.payload.lastName },
      };

    case LOGOUT:
      return initialState;

    default:
      return state;
  }
}
