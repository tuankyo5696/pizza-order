import * as actionTypes from "./../actions/actionTypes";
const initialState = {
  cart: []
}

const reducer = (state = initialState, action) => {
  let updatedCart;
  let updatedItemIndex;
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      updatedCart = [...state.cart];
      updatedItemIndex = updatedCart.findIndex(item => item._id === action.payload._id);
      if (updatedItemIndex < 0) {
        updatedCart.push({ ...action.payload, quantity: 1 })
      } else {
        const updatedItem = {
          ...updatedCart[updatedItemIndex]
        };
        updatedItem.quantity++;
        updatedCart[updatedItemIndex] = updatedItem;
      }
      return { ...state, cart: updatedCart }
    case actionTypes.REMOVE_TO_CART:
      updatedCart = [...state.cart];
      updatedItemIndex = updatedCart.findIndex(
        item => item._id === action.payload
      )
      updatedCart.splice(updatedItemIndex, 1)
      return { ...state, cart: updatedCart }
    case actionTypes.INCREMENT_CART_ITEM_QUANTITY:
      updatedCart = [...state.cart];
      updatedItemIndex = updatedCart.findIndex(item => item._id === action.payload);
      const incrementedItem = {
        ...updatedCart[updatedItemIndex]
      }
      incrementedItem.quantity++;
      updatedCart[updatedItemIndex] = incrementedItem;
      return { ...state, cart: updatedCart }
    case actionTypes.DECREMENT_CART_ITEM_QUANTITY:
      updatedCart = [...state.cart];
      updatedItemIndex = updatedCart.findIndex(item => item._id === action.payload)
      const decrementedItem = {
        ...updatedCart[updatedItemIndex]
      }
      decrementedItem.quantity--;
      updatedCart[updatedItemIndex] = decrementedItem;
      return { ...state, cart: updatedCart }
    case actionTypes.REMOVE_ALL_CART:
      updatedCart = [];
        return {...state,cart: updatedCart}
    default:
      return state;
  }
};
export default reducer;
