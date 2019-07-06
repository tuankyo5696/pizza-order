import * as actionTypes from "./../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  pizza: [],
  sides: [],
  dessert: [],
  drinks: [],
  loading: false
};

const fetchProductStart = (state, action) => {
  return updateObject(state, { loading: true });
};

const fetchProductFailed = (state, action) => {
  return updateObject(state, { loading: false });
};

const fetchPizzaSuccess = (state, action) => {
  return updateObject(state, {
    pizza: action.pizza,
    loading: false
  });
};
const fetchDrinksSuccess = (state, action) => {
  return updateObject(state, {
    drinks: action.drinks,
    loading: false
  });
};
const fetchDessertSuccess = (state, action) => {
  return updateObject(state, {
    dessert: action.dessert,
    loading: false
  });
};
const fetchSideSuccess = (state, action) => {
  return updateObject(state, {
    sides: action.sides,
    loading: false
  });
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PRODUCT_START:
      return fetchProductStart(state, action);
    case actionTypes.FETCH_PIZZA_SUCCESS:
      return fetchPizzaSuccess(state, action);
    case actionTypes.FETCH_SIDES_SUCCESS:
      return fetchSideSuccess(state, action);
    case actionTypes.FETCH_DRINKS_SUCCESS:
      return fetchDrinksSuccess(state, action);
    case actionTypes.FETCH_DESSERT_SUCCESS:
      return fetchDessertSuccess(state, action);
    case actionTypes.FETCH_PRODUCT_FAILED:
      return fetchProductFailed(state, action);
    default:
      return state;
  }
};

export default reducer;
