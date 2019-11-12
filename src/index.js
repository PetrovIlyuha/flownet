import state, { subscribe } from "./Redux/state";
import React from "react";
import { render } from "react-dom";
import App from "./App";
import { addMessage, addPost, updateNewMessageText, updateNewPostText } from "./Redux/state";
import { BrowserRouter } from "react-router-dom";


export let rerenderEntireTree = (state) => {
  render(
    <BrowserRouter>
      <App
        state={state}
        addPost={addPost}
        updateNewPostText={updateNewPostText}
        addMessage={addMessage}
        updateNewMessageText={updateNewMessageText}
      />
    </BrowserRouter>
    , document.getElementById("root"));
};


rerenderEntireTree(state);

subscribe(rerenderEntireTree);
