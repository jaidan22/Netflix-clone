import axios from "axios";
import { loginFail, loginStart, loginSuccess, logout } from "./AuthActions";

export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(`/auth/login`, user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFail(err.data));
    console.log(err);
  }
};

export const logOut = (dispatch) => {
  dispatch(logout);
};
