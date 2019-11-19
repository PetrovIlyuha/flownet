import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import s from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {
  return (
    <div>
      <div className={s.profileFlex}>
        <ProfileInfo profile={props.profile}/>
        <MyPostsContainer/>
      </div>
    </div>
  );
};

export default Profile;