import React from "react";
import hero from "../../assets/hero.jpg";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

export default function Content() {
  return (
    <div>
      <div className={s.content}>
        <img src={hero} alt="hero banner" />
        <div>Ava + Description</div>
        <MyPosts />
      </div>
    </div>
  );
}
