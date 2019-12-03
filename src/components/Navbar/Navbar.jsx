import React from "react";
import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import store from "../../Redux/redux-store";
import FriendList from "../FriendList/FriendList";

const Navbar = () => {
  return (
    <div>
      <nav className={s.nav}>
        <div className={`${s.item} ${s.active}`}>
          <NavLink to="/profile" activeClassName={s.active}>
            <i className="la la-user-circle">Profile</i>
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/dialogs" activeClassName={s.active}>
            <i className="la la-bell">Messages</i>
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/users" activeClassName={s.active}>
            <i className="la la-users">Users</i>
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/news" activeClassName={s.active}>
            <i className="la la-rss">News</i>
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/music" activeClassName={s.active}>
            <i className={`la la-soundcloud s.item`}>Music</i>
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/settings" activeClassName={s.active}>
            <i className="la la-user-cog">Settings</i>
          </NavLink>
        </div>
        <FriendList store={store}/>
      </nav>
    </div>
  );
};

export default Navbar;
