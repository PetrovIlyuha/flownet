import React from 'react';
import preloader from '../../../assets/ripple_preloader.svg';
import s from '../../Users/users.module.css';

const Preloader = (props) => {
  return (
    <div>
      <img src={preloader} className={s.spinner} alt="spinner"/>
    </div>
  )
};

export default Preloader;