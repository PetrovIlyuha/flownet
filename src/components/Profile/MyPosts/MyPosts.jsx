/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";

const PostForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field name="newPost" component="input"/>
        <div>
          <button className={s.addPostBtn} type="submit">Add Post</button>
        </div>
      </div>
    </form>
  )
};

let PostReduxForm = reduxForm({form: "post"})(PostForm);

const MyPosts = (props) => {
  const { posts } = props;
  const postsElements  = posts.map(post => {
    return (
      <Post key={post.id} message={post.message} likesCount={post.likesCount}/>
    )
  });
  const addNewPost = (values) => {
    alert("New Post");
    props.addPost(values.newPost);
  };
  return (
    <div className={s.postsBlock}>
      <h3>
        My Posts
      </h3>
      <PostReduxForm onSubmit={addNewPost}/>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  );
};

export default MyPosts;
