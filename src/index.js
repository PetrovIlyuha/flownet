import store from "./Redux/state";
import React from "react";
import { render } from "react-dom";
import App from "./App";

import { BrowserRouter } from "react-router-dom";


export let rerenderEntireTree = (state) => {
  render(
    <BrowserRouter>
      <App
        state={state}
        store={store}
      />
    </BrowserRouter>
    , document.getElementById("root"));
};


rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);
