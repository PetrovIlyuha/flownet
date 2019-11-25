import { loginAPI } from "../api/api";

const LOGIN_USER = "LOGIN_USER";

let initialState = {
  email: null,
  password: null,
  rememberMe: false,
  captcha: false
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true
      };
    default:
      return state;
  }
};