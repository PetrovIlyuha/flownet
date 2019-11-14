import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../Redux/profileReducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {
  let state = props.store.getState();
  const { dispatch } = props.store;
  let addPost = () => {
    dispatch(addPostActionCreator());
    dispatch(updateNewPostTextActionCreator());
  };

  let onPostChange = (text) => {
    let action = updateNewPostTextActionCreator(text);
    dispatch(action);
  };

  return (
    <MyPosts
      updateNewPostText={onPostChange}
      addPost={addPost}
      posts={state.profilePage.posts}
      newPostText={state.profilePage.newPostText}
    />
  );
};

export default MyPostsContainer;
