import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { cardReducer } from "./reducers";
import thunk from "redux-thunk";

import App from "./App";

const store = createStore(cardReducer, applyMiddleware(thunk));
console.log(store.getState(), "CREATE STORE REDUCER");

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
