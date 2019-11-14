import React from "react";
import { render } from "react-dom";
import store from "./Redux/redux-store";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "./storeContext";


let rerenderEntireTree = (state) => {
  render(
    <BrowserRouter>
      <Provider value={store}>
        <App/>
      </Provider>
    </BrowserRouter>
    , document.getElementById("root"));
};

rerenderEntireTree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  rerenderEntireTree(state);
});
