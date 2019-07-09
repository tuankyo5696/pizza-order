import * as actionTypes from "./../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
    orders: [],
    loading: false,
    purchased: false
}

const fetchOrderStart = (state, action) => {
    return updateObject(state, { loading: true });
  };
  
const fetchOrderFailed = (state, action) => {
    return updateObject(state, { loading: false });
};
  
const fetchOrderSuccess = (state, action) => {
    const object = updateObject(state, {
        orders: action.orders,
      loading: false
    });
    return object;
};
const purchaseOrderStart = ( state, action ) => {
    return updateObject( state, { loading: true ,purchased: false } );
};
const purchaseOrderFailed = (state,action) => {
    return updateObject(state,{loading : false})
}
const purchaseOrderSuccess = (state, action) => {
    console.log(action.orderData)
    const newOrder = updateObject( action.orderData, { id: action.orderId } );
    const object = updateObject( state, {
        loading: false,
        purchased: true,
        orders: state.orders.concat( newOrder )
    });
    console.log(object)
    return object
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_ORDER_START:
            return fetchOrderStart(state,action);
        case actionTypes.FETCH_ORDER_FAILED:
            return fetchOrderFailed(state,action);
        case actionTypes.FETCH_ORDER_SUCCESS:
            return fetchOrderSuccess(state, action);
        case actionTypes.PURCHASE_ORDER_START:
            return purchaseOrderStart(state, action)
        case actionTypes.PURCHASE_ORDER_SUCCESS:
            return purchaseOrderSuccess(state, action);
        case actionTypes.PURCHASE_ORDER_FAILED:
            return purchaseOrderFailed(state,action)
        default : return state;
    }
}

export default reducer;