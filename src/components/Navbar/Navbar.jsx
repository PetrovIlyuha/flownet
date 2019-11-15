import React from "react";
import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import UseAnimations from "react-useanimations";
import store from "../../Redux/redux-store";
import FriendList from "../FriendList/FriendList";

const Navbar = () => {
  return (
    <div>
      <nav className={s.nav}>
        <div className={`${s.item} ${s.active}`}>
          <UseAnimations animationKey="github"/>
          <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
        </div>
        <div className={s.item}>
          <UseAnimations animationKey="twitter"/>
          <NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
        </div>
        <div className={s.item}>
          <UseAnimations animationKey="archive"/>
          <NavLink to="/users" activeClassName={s.active}>Users</NavLink>
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
          <UseAnimations animationKey="settings2"/>
          <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
        </div>
        <FriendList store={store}/>
      </nav>
    </div>
  );
};

export default Navbar;
