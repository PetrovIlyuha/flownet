import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import s from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileCarousel from "./ProfileInfo/CarouselProfile";


const Profile = (props) => {
  return (
    <div className={s.carouselAndProfile}>
      <ProfileCarousel/>
      <div className={s.profileContainer}>
        <ProfileInfo
            profile={props.profile}
            status={props.status}
            updateStatus={props.updateStatus}
        />
        <MyPostsContainer/>
      </div>
    </div>
  );
};

export default Profile;