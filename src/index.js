import store from "./Redux/store";
import React from "react";
import { render } from "react-dom";
import App from "./App";

import { BrowserRouter } from "react-router-dom";


let rerenderEntireTree = (state) => {
  render(
    <BrowserRouter>
      <App
        state={state}
        dispatch={store.dispatch.bind(store)}
      />
    </BrowserRouter>
    , document.getElementById("root"));
};

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);
