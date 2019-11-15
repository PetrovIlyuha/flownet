import React from "react";
import s from "./users.module.css";
import { Button } from "reactstrap";

const Users = (props) => {
  if (props.users.length === 0){
    props.setUsers( [
      {
        id: 1,
        photoUrl: require("../../assets/friend0.jpg"),
        followed: false,
        fullName: "Bob Marley",
        status: "Singer",
        location: {
          city: "Minneapolis",
          country: "USA"
        }
      },
      {
        id: 2,
        photoUrl: require("../../assets/friend1.jpg"),
        followed: true,
        fullName: "Ricky Martin",
        status: "Singer",
        location: {
          city: "Calcutta",
          country: "India"
        }
      },
      {
        id: 3,
        followed: false,
        photoUrl: require("../../assets/friend2.jpg"),
        fullName: "Vladimir Putin",
        status: "President",
        location: {
          city: "Moscow",
          country: "Russia"
        }
      }
    ]);
  }
  return (
    <div className={s.users}>
      {
        props.users.map(user => {
          return (
            <div key={user.id} className={s.userContainer}>
              <div className={s.avatar}>
                <img
                  src={user.photoUrl}
                  alt="photo"
                  style={{ width: "70px", borderRadius: "50%", border: "3px solid palegreen" }}
                />
              </div>
              <div>
                {
                  user.followed
                    ? <Button onClick={() => { props.unfollow(user.id)}}>Unfollow</Button>
                    : <Button outline color="secondary" onClick={() => { props.follow(user.id)}}>Follow</Button>
                }
              </div>
              <div className={s.name}>{user.fullName}</div>
              <div className={s.status}>{user.status}</div>
              <div className={s.country}>{user.location.country}</div>
              <div className={s.city}>{user.location.city}</div>
            </div>
          );
        })
      }
    </div>
  );
};

export default Users;