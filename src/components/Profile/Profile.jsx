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
          dispatch={props.dispatch}/>
      </div>
    </div>
  );
};

export default Content;