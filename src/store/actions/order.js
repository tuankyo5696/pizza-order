import * as type from "./actionTypes";

export const fetchOrderStart = () => {
    return {
        type: type.FETCH_ORDER_START
    }
}

export const fetchOrderFailed = () => {
    return{
        type: type.FETCH_ORDER_FAILED
    }
}

export const fetchOrderSuccess = (orders) => {
    return {
        type: type.FETCH_ORDER_SUCCESS,
        orders
    }
}

export const fetchOrder = () => {
    return {
        type: type.FETCH_ORDER,
    }
}

export const purchaseOrderFailed = (error) => {
    return {
        type: type.PURCHASE_ORDER_FAILED,
        error
    }
}
export const purchaseOrderStart = () => {
    return {
        type: type.PURCHASE_ORDER_START
    }
}
export const purchaseOrder = (orderData) => {
    return {
      type: type.PURCHASE_ORDER,
      orderData
    };
};

export const purchaseOrderSuccess = (id,orderData) => {
    return {
        type: type.PURCHASE_ORDER_SUCCESS,
        orderId: id,
        orderData
    }
}