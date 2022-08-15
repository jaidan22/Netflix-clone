import axios from "axios";
import { loginFail, loginStart, loginSuccess, logout } from "./AuthActions";

export const login = async (user, dispatch, stoploading) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(`/auth/login`, user);
    dispatch(loginSuccess(res.data));
    // stoploading();
  } catch (err) {
    dispatch(loginFail(err.data));
    console.log(err);
    stoploading();
  }
};

export const logOut = (dispatch) => {
  dispatch(logout);
};
