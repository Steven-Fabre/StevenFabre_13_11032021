import axios from "axios";

export const GET_USER = "GET_USER";
export const GET_TOKEN = "GET_TOKEN";
export const UPDATE_USER = "UPDATE_USER";
export const LOGOUT = "LOGOUT";

export const getUser = (token) => {
  return (dispatch) => {
    return axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}/user/profile`,
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        dispatch({ type: GET_USER, payload: res.data.body });
      })
      .catch((err) => console.log(err));
  };
};

export const getToken = (email, password, isRemember) => {
  return (dispatch) => {
    return axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}/user/login`,
      "Access-Control-Allow-Credentials": true,
      data: {
        email,
        password,
      },
    })
      .then((res) => {
        dispatch({ type: GET_TOKEN, payload: res.data.body.token, isRemember: isRemember });
        dispatch(getUser(res.data.body.token));
      })
      .catch((err) => console.log(err));
  };
};

export const updateUser = (token, firstName, lastName) => {
  return (dispatch) => {
    return axios({
      method: "put",
      url: `${process.env.REACT_APP_API_URL}/user/profile`,
      "Access-Control-Allow-Credentials": true,
      headers: { Authorization: `Bearer ${token}` },
      data: {
        firstName,
        lastName,
      },
    })
      .then((res) => {
        dispatch({ type: UPDATE_USER, payload: res.data.body });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const logout = () => {
  return (dispatch) => dispatch({ type: LOGOUT, payload: undefined });
};
