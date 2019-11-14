import React from "react";
import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import UseAnimations from 'react-useanimations';

const Navbar = (props) => {
  const friends = props.state.sidebar.friends;
  return (
    <div>
      <nav className={s.nav}>
        <div className={`${s.item} ${s.active}`}>
          <UseAnimations animationKey="github" />
          <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
        </div>
        <div className={s.item}>
          <UseAnimations animationKey="twitter"/>
          <NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
        </div>
        <div className={s.item}>
          <UseAnimations animationKey="bookmark"/>
          <NavLink to="/news" activeClassName={s.active}>News</NavLink>
        </div>
        <div className={s.item}>
          <UseAnimations animationKey="playPauseCircle"/>
          <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
        </div>
        <div className={s.item}>
          <UseAnimations animationKey="settings2" />
          <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
        </div>
        <div className={s.friends}>
          {friends.map(friend => {
            return (
              <div key={friend.friendId} className={s.friend}>
                <img
                  src={require(`../../assets/friend${friend.friendId}.jpg`)}
                  alt=""
                  crossOrigin="anonymous"
                />
                <div>{friend.name}</div>
              </div>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
