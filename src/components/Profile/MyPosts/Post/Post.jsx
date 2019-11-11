import React from "react";
import userPhoto from "../../../../assets/friend1.jpg";
import s from "./Post.module.css";


const Post = props => {
  return (
    <div className={s.item}>
      {}
      <img src={userPhoto} alt="user avatar" />
      <div>
        {props.message}
        <span className={s.like}>
          Likes from
          <span className={s.likeNum}>
            {props.likesCount}
          </span>
          people
        </span>
      </div>
    </div>
  );
};
export default Post;



