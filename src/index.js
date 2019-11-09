import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

let dialogsData = [
  { id: 1, name: "John Mitchell" },
  { id: 2, name: "Veronica Marvel" },
  { id: 3, name: "Donald Knuth" },
  { id: 4, name: "Matt Damon" }
];

let messagesData = [
  { id: 1, message: "What's new in React?" },
  { id: 2, message: "Hooks has taken over minds of developers" },
  { id: 3, message: "While I am still on lifecycle methods and REDUX" }
];

let postData = [
  {
    id:1,
    message: 'How is progress in Front-End self-education?',
    likesCount: 14
  },
  {
    id:2,
    message: 'It\'s moving under my skin...',
    likesCount: 11
  },
  {
    id:3,
    message: 'Doesn\'t it scares you?',
    likesCount: 122
  },
  {
    id:4,
    message: 'Not really it\'s a tradeoff',
    likesCount: 3
  }
];

ReactDOM.render(
  <App
    posts={postData}
    messages={messagesData}
    dialogs={dialogsData}
  />

  , document.getElementById("root"));
