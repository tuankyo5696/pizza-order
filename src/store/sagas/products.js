import { put } from "redux-saga-effects";
import axios from "axios";
import * as actions from "./../actions/index";

export function* fetchPizzaSaga(action) {
  yield put(actions.fetchProductStart());
  try {
    const response = yield axios.get(
      "https://cors-anywhere.herokuapp.com/https://pizza-ordering-api.herokuapp.com/categories/Pizzas/products"
    );
    const fetchedPizza = [];
    for (let key in response.data) {
      fetchedPizza.push({
        ...response.data[key]
      });
    }
    yield put(actions.fetchPizzaSuccess(fetchedPizza));
  } catch (error) {
    yield put(actions.fetchProductFailed(error));
  }
}

export function* fetchDrinksSaga(action) {
  yield put(actions.fetchProductStart());
  try {
    const response = yield axios.get(
      "https://cors-anywhere.herokuapp.com/https://pizza-ordering-api.herokuapp.com/categories/Drinks/products"
    );
    const fetchDrinks = [];
    for (let key in response.data) {
      fetchDrinks.push({
        ...response.data[key]
      });
    }
  
    yield put(actions.fetchDrinksSuccess(fetchDrinks));
  } catch (error) {
    yield put(actions.fetchProductFailed(error));
  }
}
export function* fetchSidesSaga(action) {
  yield put(actions.fetchProductStart());
  try {
    const response = yield axios.get(
      "https://cors-anywhere.herokuapp.com/https://pizza-ordering-api.herokuapp.com/categories/Side/products"
    );
    const fetchSides = [];
    for (let key in response.data) {
      fetchSides.push({
        ...response.data[key]
      });
    }
   
    yield put(actions.fetchSidesSuccess(fetchSides));
  } catch (error) {
    yield put(actions.fetchProductFailed(error));
  }
}
export function* fetchDessertSaga(action) {
  yield put(actions.fetchProductStart());
  try {
    const response = yield axios.get(
      "https://cors-anywhere.herokuapp.com/https://pizza-ordering-api.herokuapp.com/categories/Desserts/products"
    );
    const fetchDessert = [];
    for (let key in response.data) {
      fetchDessert.push({
        ...response.data[key]
      });
    }
   
    yield put(actions.fetchDessertSuccess(fetchDessert));
  } catch (error) {
    yield put(actions.fetchProductFailed(error));
  }
}
