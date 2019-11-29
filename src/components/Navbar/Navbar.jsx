import React from "react";
import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
// import UseAnimations from "react-useanimations";
import store from "../../Redux/redux-store";
import FriendList from "../FriendList/FriendList";

const Navbar = () => {
  return (
    <div>
      <nav className={s.nav}>
        <div className={`${s.item} ${s.active}`}>
          <NavLink to="/profile" activeClassName={s.active}>
            {/*<UseAnimations animationKey="github" className={s.animation}/>*/}
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/dialogs" activeClassName={s.active}>
            {/*<UseAnimations animationKey="twitter" className={s.animation}/>*/}
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/users" activeClassName={s.active}>
            {/*<UseAnimations animationKey="archive" className={s.animation}/>*/}
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/news" activeClassName={s.active}>
            {/*<UseAnimations animationKey="bookmark" className={s.animation}/>*/}
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/music" activeClassName={s.active}>
            {/*<UseAnimations animationKey="playPauseCircle" className={s.animation}/>*/}
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/settings" activeClassName={s.active}>
            {/*<UseAnimations animationKey="settings2" className={s.animation}/>*/}
          </NavLink>
        </div>
        <FriendList store={store}/>
      </nav>
    </div>
  );
};

export default Navbar;
