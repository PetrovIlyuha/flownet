import React from "react";
import hero from "../../../assets/dunesreact.jpg";
import s from "./ProgileInfo.module.css";

const ProfileInfo = (props) => {
  return (
    <div>
      <div>
        <img src={hero} alt="hero banner" className={s.hero}/>
      </div>
      <div className={s.descriptionBlock}>
        Ava + Description
      </div>
    </div>
  );
};

export default ProfileInfo;