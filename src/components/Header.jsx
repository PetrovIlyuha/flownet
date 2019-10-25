import React from "react";
import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <img src="https://brandmark.io/logo-rank/random/pepsi.png" alt="logo" />
    </header>
  );
};

export default Header;
