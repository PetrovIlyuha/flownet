import React from "react";
import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <img src="https://brandmark.io/logo-rank/random/pepsi.png" alt="logo" />
      <h2 className={s.logo}>Connectom</h2>
    </header>
  );
};

export default Header;
