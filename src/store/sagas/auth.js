import { delay } from "redux-saga";
import { put, call } from "redux-saga-effects";
import axios from "axios";
import * as jwtDecode from "jwt-decode";
import * as actions from "./../actions/index";

export function* logoutSaga(action) {
  yield call([localStorage, "removeItem"], "token");
  yield call([localStorage, "removeItem"], "expirationDate");
  yield call([localStorage, "removeItem"], "userId");
  yield call([localStorage, "removeItem"], "auth");
  yield put(actions.logoutSucceed());
}

export function* checkAuthTimeoutSaga(action) {
  yield delay(action.expirationTime * 1000);
  yield put(actions.logout());
}
export function* registerSaga(action) {
  yield put(actions.authStart());
  let authData = {
    email: action.email,
    password: action.password,
    phone: action.phone,
    firstname: action.firstname,
    lastname: action.lastname
  };
  let url =
    "https://cors-anywhere.herokuapp.com/https://pizza-ordering-api.herokuapp.com/register";
  try {
    yield axios.post(url, authData);
  } catch (error) {
    yield put(actions.authFail(error));
  }
}
export function* authUserSaga(action) {
  yield put(actions.authStart());
  const authData = {
    email: action.email,
    password: action.password
  };
  let url =
    "https://cors-anywhere.herokuapp.com/https://pizza-ordering-api.herokuapp.com/auth";
  try {
    const response = yield axios.post(url, authData);
    console.log(response)
    let token = response.data.JWT;
    let decoded = jwtDecode(token);
    const expirationDate = yield new Date(new Date().getTime() + decoded.exp);
    console.log(decoded)
    let idToken = decoded.id;
    yield localStorage.setItem("token", idToken);
    yield localStorage.setItem("expirationDate", expirationDate);
    yield localStorage.setItem("userId", decoded._id);
    yield localStorage.setItem("auth", decoded);
    yield put(actions.authSuccess(idToken, decoded._id,decoded));
  } catch (error) {
    yield put(actions.authFail(error));
  }
}
export function* authCheckStateSaga(action, state) {
  const token = yield localStorage.getItem("token");
  if (!token) {
    yield put(actions.logout());
  } else {
    const expirationDate = yield new Date(
      localStorage.getItem("expirationDate")
    );
    if (expirationDate <= new Date()) {
      yield put(actions.logout());
    } else {
      const userId = yield localStorage.getItem("userId");
      yield put(actions.authSuccess(token, userId));
      yield put(
        actions.checkAuthTimeout(
          (expirationDate.getTime() - new Date().getTime()) / 1000
        )
      );
    }
  }
}
