import React from 'react';
import s from './s.module.scss'

const Description = () => {
  return (
    <div className={s.d}>
      {/*count pomodoro*/}
      <h3 className={s.d__count}>#1</h3>
      <p className={s.d__text}>Time to focus</p>
    </div>
  );
};

export {Description};
