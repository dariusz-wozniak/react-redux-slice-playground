import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { configureStore } from "@reduxjs/toolkit";

// Local imports:
import App from "./App";
import rootReducer from "./reducers";
import "./index.css";

// The new way (using Redux Toolkit):
const store = configureStore({ reducer: rootReducer });

// The old way:
// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
