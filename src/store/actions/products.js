import * as type from "./actionTypes";

export const fetchProductStart = () => {
  return {
    type: type.FETCH_PRODUCT_START
  };
};
export const fetchProductFailed = error => {
  return {
    type: type.FETCH_PRODUCT_FAILED,
    error
  };
};
export const fetchPizzaSuccess = pizza => {
  return {
    type: type.FETCH_PIZZA_SUCCESS,
    pizza
  };
};
export const fetchDrinksSuccess = drinks => {
  return {
    type: type.FETCH_DRINKS_SUCCESS,
    drinks
  };
};
export const fetchSidesSuccess = sides => {
  return {
    type: type.FETCH_SIDES_SUCCESS,
    sides
  };
};
export const fetchDessertSuccess = dessert => {
  return {
    type: type.FETCH_DESSERT_SUCCESS,
    dessert
  };
};

export const fetchPizza = () => {
  return {
    type: type.FETCH_PIZZA
  };
};

export const fetchDrinks = () => {
  return {
    type: type.FETCH_DRINKS
  };
};

export const fetchDessert = () => {
  return {
    type: type.FETCH_DESSERT
  };
};

export const fetchSides = () => {
  return {
    type: type.FETCH_SIDES
  };
};
