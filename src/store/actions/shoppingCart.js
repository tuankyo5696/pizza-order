import * as type from "./actionTypes";

export const addToCart = product => {
  return {
    type: type.ADD_TO_CART,
    payload : product
  };
};

export const removeToCart = productId => {
  return {
    type: type.REMOVE_TO_CART,
    payload: productId
  };
};
export const removeAllCart = () => {
  return {
    type: type.REMOVE_ALL_CART
  }
}
export const incrementCartQuantity = productId => {
  return{
    type: type.INCREMENT_CART_ITEM_QUANTITY,
    payload: productId
  }
}

export const decrementCartQuantity = productId => {
  return {
    type: type.DECREMENT_CART_ITEM_QUANTITY,
    payload: productId
  }
}

export const countItem = (n) => {
  return {
    type: type.COUNT_ITEM,
    totalItemCounts: n
  }
}
