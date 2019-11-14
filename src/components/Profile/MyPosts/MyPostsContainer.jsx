import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../Redux/profileReducer";
import MyPosts from "./MyPosts";
import Provider from "../../../storeContext";

const MyPostsContainer = () => {
  return (
    <Provider.Consumer>
      {
        (store) => {
          let state = store.getState();
          const { dispatch } = store;
          let addPost = () => {
            dispatch(addPostActionCreator());
            dispatch(updateNewPostTextActionCreator());
          };

          let onPostChange = (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
          };
          return <MyPosts
            updateNewPostText={onPostChange}
            addPost={addPost}
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}
          />;
        }
      }
    </Provider.Consumer>
  );
};

export default MyPostsContainer;
