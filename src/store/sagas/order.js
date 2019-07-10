import { put } from "redux-saga-effects";
import axios from "axios";
import * as actions from "./../actions/index";

export function* purchaseOrderSaga(action) {
  yield put(actions.purchaseOrderStart());
  try {
    let tokenStr = localStorage.getItem("JWTtoken");
    const response = yield axios.post(
      "https://cors-anywhere.herokuapp.com/https://pizza-ordering-api.herokuapp.com/orders",
      action.orderData,
      { headers: { Authorization: `Bearer ${tokenStr}` } }
    );
    yield put(
      actions.purchaseOrderSuccess(response.data.orderInfo.id, action.orderData)
    );
  } catch (error) {
    yield put(actions.purchaseOrderFailed(error));
  }
}

export function* fetchOrderSaga(action) {
  yield put(actions.fetchOrderStart());
  try {
    let tokenStr = localStorage.getItem("JWTtoken");
    const response = yield axios.get(
      "https://cors-anywhere.herokuapp.com/https://pizza-ordering-api.herokuapp.com/orders",
      { headers: { Authorization: `Bearer ${tokenStr}` } }
    );

    const fetchedOrder = [];
    for (let key in response.data) {
      fetchedOrder.push({
        ...response.data[key]
      });
    }
    localStorage.setItem('orders',JSON.stringify(fetchedOrder))
    yield put(actions.fetchOrderSuccess(fetchedOrder));
  } catch (error) {
    yield put(actions.fetchOrderFailed(error));
  }
}
