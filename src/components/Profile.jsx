import React from "react";
import hero from "../assets/hero.jpg";
import s from "./Profile.module.css";

export default function Content() {
  return (
    <div>
      <div className={s.content}>
        <img src={hero} alt="hero banner" />
        <div>Ava + Description</div>
        <div className={s.posts}>
          My Posts
          <div className={s.item}>post 1</div>
          <div className={s.item}>post 2</div>
        </div>
      </div>
    </div>
  );
}
