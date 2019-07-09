import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware,  combineReducers } from "redux";
import authReducer from "./store/reducers/auth";
import userReducer from "./store/reducers/user";
import productsReducer from "./store/reducers/products";
import shoppingCartReducer from "./store/reducers/shoppingCart";
import OrdersReducer from "./store/reducers/order";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import createSagaMiddleware from "redux-saga";
import { watchAuth, watchFetchData,watchOrder } from "./store/sagas";


const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  shop: shoppingCartReducer,
  products: productsReducer,
  orders: OrdersReducer
});
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(watchAuth);
sagaMiddleware.run(watchFetchData);
sagaMiddleware.run(watchOrder);
const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
