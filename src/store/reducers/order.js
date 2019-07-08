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
    return updateObject(state, {
      orders: action.orders,
      loading: false
    });
};
const purchaseOrderStart = ( state, action ) => {
    return updateObject( state, { loading: true } );
};
const purchaseOrderFailed = (state,action) => {
    return updateObject(state,{loading : false})
}
const purchaseOrderSuccess = (state, action) => {
    const newOrder = updateObject( action.orderData, { id: action.orderId } );
    return updateObject( state, {
        loading: false,
        purchased: true,
        orders: state.orders.concat( newOrder )
    } );
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