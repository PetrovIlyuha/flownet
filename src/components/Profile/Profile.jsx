import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import s from "./Profile.module.css";

const Content = (props) => {
  return (
    <div>
      <div className={s.profileFlex}>
        <ProfileInfo/>
        <MyPosts
          posts={props.state.profilePage.posts}
          newPostText={props.state.profilePage.newPostText}
          updateNewPostText={props.store.updateNewPostText.bind(props.store)}
          addPost={props.store.addPost.bind(props.store)}/>
      </div>
    </div>
  );
};

export default Content;