import React from 'react';
import s from './s.module.scss';

const TimerControl = () => {
  return (
    <div className={s.t}>
      <div className={s.t__wrap}>
        <ul className={s.t__list}>
          <li>
            <button>Pomodoro</button>
          </li>
          <li>
            <button>Short Break</button>
          </li>
          <li>
            <button>Long Break</button>
          </li>
        </ul>

        <h1 className={s.t__timer}>
          42:51
        </h1>

        <div className={s.t__wrap_button}>
          <button>Start</button>
        </div>
      </div>
    </div>
  );
};

export {TimerControl};
