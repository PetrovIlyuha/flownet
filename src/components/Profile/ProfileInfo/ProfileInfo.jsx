import React from "react";
import hero from "../../../assets/dunesreact.jpg";
import s from "./ProgileInfo.module.css";
import Avatar from "react-avatar";

const ProfileInfo = props => {
  return (
    <div className={s.profileBlock}>
      <div className={s.hero}>
        <img src={hero} alt="hero banner" className={s.banner}/>
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
