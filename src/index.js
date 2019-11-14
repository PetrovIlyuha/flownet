import React from "react";
import { render } from "react-dom";
import store from './Redux/redux-store';
import App from "./App";

import { BrowserRouter } from "react-router-dom";


let rerenderEntireTree = (state) => {
  render(
    <BrowserRouter>
      <App
        state={state}
        dispatch={store.dispatch.bind(store)}
        store={store}
      />
    </BrowserRouter>
    , document.getElementById("root"));
};

rerenderEntireTree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  rerenderEntireTree(state);
});
