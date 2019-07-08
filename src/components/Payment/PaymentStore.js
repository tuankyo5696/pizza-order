import React from 'react'
import FormPaymentStore from  './FormPaymentStore/FormPaymentStore'
import { EMPTY_STRING } from './../../constants/helper';
const paymentStore = props => {
let cart = []
  if (props.cart) {
    props.cart.map((item, index) => {
      cart.push({
        product: item._id,
        unitPrice: item.prices[0]._id,
        quantity: item.quantity,
        options: item.category.name === "Pizzas" ? item.options : undefined,
        wrapper:  item.category.name === "Pizzas" ? item.wrapper : undefined
      })
      return cart;
    })
  }
    return(
        <div className="payment">
        <FormPaymentStore form={{
            fullname: EMPTY_STRING,     
            shippingAddress: localStorage.getItem('address'),
            idAddress : localStorage.getItem('idAddress'),
            orderLines : cart,
            phone: EMPTY_STRING,
            email: EMPTY_STRING,
            note: EMPTY_STRING,
            orderMethod: 'CARRYOUT',
            paymentMethod: {
              type: 'COD'
            }
        }} />
    </div>
    )
}
    


export default paymentStore;