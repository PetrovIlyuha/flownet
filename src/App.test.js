import React from 'react';
import ReactDOM from 'react-dom';
import SocialNetworkApp from "./App";

it("renders not crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<SocialNetworkApp/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

