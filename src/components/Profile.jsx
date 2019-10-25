import React from "react";
import hero from "../assets/hero.jpg";

export default function Content() {
  return (
    <div>
      <div className="content">
        <img src={hero} alt="hero banner" />
        <div>Ava + Description</div>
        <div>
          My Posts
          <div>New Posts</div>
          <div>post 1</div>
          <div>post 2</div>
        </div>
      </div>
    </div>
  );
}
