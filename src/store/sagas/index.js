import { takeEvery, all } from "redux-saga/effects";

import * as actionTypes from "./../actions/actionTypes";

import {
  registerSaga,
  authUserSaga,
  checkAuthTimeoutSaga,
  logoutSaga,
  authCheckStateSaga
} from "./auth";

import {
  fetchPizzaSaga,
  fetchDessertSaga,
  fetchDrinksSaga,
  fetchSidesSaga
} from "./products";
import { fetchOrderSaga, purchaseOrderSaga } from "./order";
export function* watchAuth() {
  yield all([
    takeEvery(actionTypes.AUTH_REGISTER, registerSaga),
    takeEvery(actionTypes.AUTH_USER, authUserSaga),
    takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga),
    takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga),
    takeEvery(actionTypes.AUTH_CHECK_STATE, authCheckStateSaga)
  ]);
}
export function* watchFetchData() {
  yield all([
    takeEvery(actionTypes.FETCH_PIZZA, fetchPizzaSaga),
    takeEvery(actionTypes.FETCH_DRINKS, fetchDrinksSaga),
    takeEvery(actionTypes.FETCH_DESSERT, fetchDessertSaga),
    takeEvery(actionTypes.FETCH_SIDES, fetchSidesSaga)
  ]);
}
export function* watchOrder() {
  yield all([
    takeEvery(actionTypes.FETCH_ORDER, fetchOrderSaga),
    takeEvery(actionTypes.PURCHASE_ORDER, purchaseOrderSaga)
  ]);
}
