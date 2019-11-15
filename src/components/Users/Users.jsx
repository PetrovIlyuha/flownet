import React from "react";
import s from "./users.module.css";
import { Button } from "reactstrap";
import * as axios from "axios";
import userPhoto from '../../assets/friend0.jpg';

const Users = (props) => {
  if (props.users.length === 0) {
    axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
      props.setUsers(response.data.items);
    });
  }

  return (
    <div className={s.users}>
      {
        props.users.map(user => {
          return (
            <div key={user.id} className={s.userContainer}>
              <div className={s.avatar}>
                <img
                  src={user.photos.small !== null ? user.photos.small : userPhoto}
                  alt="user photography"
                  style={{ width: "70px", borderRadius: "50%", border: "3px solid palegreen" }}
                />
              </div>
              <div>
                {
                  user.followed
                    ? <Button onClick={() => {
                      props.unfollow(user.id);
                    }}>Unfollow</Button>
                    : <Button outline color="secondary" onClick={() => {
                      props.follow(user.id);
                    }}>Follow</Button>
                }
              </div>
              <div className={s.name}>{user.name}</div>
              <div className={s.status}>{user.status}</div>
              <div className={s.country}>{"user.location.country"}</div>
              <div className={s.city}>{"user.location.city"}</div>
            </div>
          );
        })
      }
    </div>
  );
};

export default Users;