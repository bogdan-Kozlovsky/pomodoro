import React from 'react';
import logo from '/src/assets/icon/pomodorotimer.svg';
import s from './s.module.scss';

const Header = () => {
  return (
    <div className={s.h}>
      <div className={s.h__wrap}>
        <img src={logo} alt="application logo" className={s.h__logo}/>

        <ul className={s.h__list}>
          <li>
            <button>Report</button>
          </li>
          <li>
            <button>Setting</button>
          </li>
          <li>
            <button>Login or profile</button>
          </li>
        </ul>
      </div>
      <div className={s.h__progress}></div>
    </div>
  );
};

export {Header};
