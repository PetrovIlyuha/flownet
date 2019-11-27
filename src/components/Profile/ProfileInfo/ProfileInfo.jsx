import React from "react";
import s from "./ProgileInfo.module.css";
import Avatar from "react-avatar";
import Preloader from "../../Common/Preloader/preloader";
import UseAnimations from "react-useanimations";
import JobLooking from '../../../assets/job_looking_true.png';
import NonJobLooking from '../../../assets/job_looking_false.png';
// import ProfileStatus from "../ProfileStatus";
import ProfileStatusOnHooks from "../ProfileStatusOnHooks";


const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader/>;
  }
  return (
    <div className={s.profileBlock}>
      <ProfileStatusOnHooks status={props.status} updateStatus={props.updateStatus}/>
      {/*<ProfileStatus status={props.status} updateStatus={props.updateStatus}/>*/}
      <div className={s.descriptionBlock}>
        <Avatar className={s.avatar}
          src={props.profile.photos.large}
          size="80" round={true}
        />
        <div className={s.aboutMe}>
          {props.profile.aboutMe}
        </div>
        <div className={s.fullName}>
          {props.profile.fullName}
        </div>
        <div className={s.contactList}>
          <a href={`${props.profile.contacts.facebook}`}>
            <UseAnimations animationKey="facebook" className={s.animation}/>
          </a>
          <a href={`${props.profile.contacts.github}`}>
            <UseAnimations animationKey="github" className={s.animation}/>
          </a>
          <a href={`${props.profile.contacts.instagram}`}>
            <UseAnimations animationKey="instagram" className={s.animation}/>
          </a>
          <a href={`${props.profile.contacts.twitter}`}>
            <UseAnimations animationKey="twitter" className={s.animation}/>
          </a>
        </div>
        <div className={s.jobLook}>
          {props.profile.lookingForAJob ?
            <img src={JobLooking} alt="job search"/>
            :
            <img src={NonJobLooking} alt="not searching for job"/>}
        </div>
        <div className={s.lookingJobDescription}>
          <div>
            Job Title
          </div>
          {props.profile.lookingForAJobDescription}</div>
      </div>
    </div>
  );
};

export default ProfileInfo;
