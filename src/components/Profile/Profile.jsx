import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import s from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Content = (props) => {
  return (
    <div>
      <div className={s.profileFlex}>
        <ProfileInfo/>
        <MyPostsContainer
          store={props.store}
        />
      </div>
    </div>
  );
};

export default Content;