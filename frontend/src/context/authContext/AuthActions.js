export const loginStart = () => ({
  type: "LOGIN_START",
});
export const loginSuccess = (user) => ({
    type: "LOGIN_SUCCESS",
    payload:user,
});
export const loginFail = (err) => ({
    type: "LOGIN_FAIL",
    payload: err,
});
export const logout = () => ({
    type: "LOGOUT",
});
