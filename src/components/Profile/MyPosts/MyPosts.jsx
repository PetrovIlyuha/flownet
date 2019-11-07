/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

export default function MyPosts() {
  return (
    <div>
      My Posts
      <div>
        <textarea></textarea>
        <button>Add Post</button>
      </div>
      <div className={s.posts}>
        <Post message="Hope it will be fine" likeCount="4" />
        <Post message="Sure it will" likeCount="5" />
      </div>
    </div>
  );
}
