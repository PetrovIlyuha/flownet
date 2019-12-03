import React from "react";
import s from "./users.module.css";
import userPhoto from "../../assets/friend0.jpg";
import { NavLink } from "react-router-dom";

const User = ({ userId, user, followingInProgress, unfollow, follow }) => {
  return (
    <div className={s.userContainer}>
      <NavLink to={"/profile/" + userId}>
        <div className={s.avatar}>
          <img
            src={user.photos.small !== null ? user.photos.small : userPhoto}
            alt="user photography"
            style={{ width: "70px", borderRadius: "50%", border: "3px solid palegreen" }}
          />
        </div>
      </NavLink>
      <div>
        {
          user.followed
            ? <button className={s.unfollowBtn} disabled={followingInProgress.some(id => id === user.id)}
                      onClick={() => {
                        unfollow(user.id);
                      }}>
              Unfollow
            </button>
            : <button
                      className={s.followBtn}
                      disabled={followingInProgress.some(id => id === user.id)}
                      onClick={() => {
                        follow(user.id);
                      }}>
              Follow
            </button>
        }
      </div>
      <div className={s.name}>{user.name}</div>
      <div className={s.status}>{user.status}</div>
      <div className={s.country}>{"user.location.country"}</div>
      <div className={s.city}>{"user.location.city"}</div>
    </div>
  );
};

export default User;
