import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import s from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import CarouselProfile from "./ProfileInfo/CarouselProfile";


const Profile = (props) => {
  return (
    <div>
      <CarouselProfile/>
      <div className={s.profileContainer}>
        <ProfileInfo profile={props.profile}/>
        <MyPostsContainer/>
      </div>
    </div>
  );
};

export default Profile;