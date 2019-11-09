/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  const postData  = props.posts;
  return (
    <div className={s.postsBlock}>
      <h3>
        My Posts
      </h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add Post</button>
        </div>
      </div>
      <div className={s.posts}>
        {
          postData.map(post => {
            return (
              <Post key={post.id} message={post.message} likesCount={post.likesCount}/>
            )
          })
        }
      </div>
    </div>
  );
};

export default MyPosts;
