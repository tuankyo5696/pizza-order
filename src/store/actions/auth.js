import * as type from "./actionTypes";

export const authStart = () => {
  return {
    type: type.AUTH_START
  };
};

export const authFail = error => {
  return {
    type: type.AUTH_FAIL,
    error: error
  };
};

export const authSuccess = (token, userId,userData) => {
  return {
    type: type.AUTH_SUCCESS,
    token,
    userId,
    userData
  };
};
export const logout = () => {
  return {
    type: type.AUTH_INITIATE_LOGOUT
  };
};
export const logoutSucceed = () => {
  return {
    type: type.AUTH_LOGOUT
  };
};
export const checkAuthTimeout = expirationTime => {
  return {
    type: type.AUTH_CHECK_TIMEOUT,
    expirationTime
  };
};
export const register = (
  email,
  password,
  phone,
  firstname,
  lastname,
  isSignup
) => {
  return {
    type: type.AUTH_REGISTER,
    email,
    password,
    phone,
    firstname,
    lastname,
    isSignup
  };
};
export const auth = (email, password, isSignup) => {
  return {
    type: type.AUTH_USER,
    email,
    password,
    isSignup
  };
};

export const setAuthRedirectPath = path => {
  return {
    type: type.SET_AUTH_REDIRECT_PATH,
    path
  };
};
export const authCheckState = () => {
  return {
    type: type.AUTH_CHECK_STATE
  };
};
