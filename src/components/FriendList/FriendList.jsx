import React, { Component } from "react";
import s from "../Navbar/Navbar.module.css";

class FriendList extends Component {
  constructor(props){
    super(props);
      this.store = props.store;
  }
  render() {
    const friends = this.props.store.getState().sidebar.friends;
    return (
      <div className={s.friends}>
        {
          friends.map(friend => {
            return (
              <div className={s.friend} key={friend.friendId}>
                <img
                  src={require(`../../assets/friend${friend.friendId}.jpg`)}
                  alt=""
                  crossOrigin="anonymous"
                />
                <div>{friend.name}</div>
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default FriendList;


