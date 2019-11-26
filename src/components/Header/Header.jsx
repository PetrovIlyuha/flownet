import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={s.header}>
      <img src="https://brandmark.io/logo-rank/random/pepsi.png" alt="logo" />
      <div className={s.loginBlock}>
        {
          props.isAuth ? <NavLink to={'/logout'} className={s.logout} onClick={props.logout}>{props.login} - Logout</NavLink>
          : <NavLink to={'/login'} className={s.login}>Login</NavLink>
        }
      </div>
      <h2 className={s.logo}>Connectome</h2>
    </header>
  );
};

export default Header;
