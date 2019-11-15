import React from "react";
import s from "./ProgileInfo.module.css";
import Avatar from "react-avatar";
import CarouselProfile from "./CarouselProfile";

const ProfileInfo = () => {
  return (
    <div className={s.profileBlock}>
      <div className={s.carouselFlex}>
        <CarouselProfile/>
      </div>
      <div className={s.descriptionBlock}>
        <Avatar
          name="Anna Temnikova"
          src={require(`../../../assets/friend2.jpg`)}
          size="80" round={true}/>
        <div className={s.personalInfo}>
          Web-Designer from Boston, MA
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
