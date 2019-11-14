import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import s from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Content = () => {
  return (
    <div>
      <div className={s.profileFlex}>
        <ProfileInfo/>
        <MyPostsContainer/>
      </div>
    </div>
  );
};

export default Content;