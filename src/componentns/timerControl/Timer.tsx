import React from 'react';
import useTimer from "/src/hooks/useTimer";
import s from "./s.module.scss";

interface ITimer {
  defaultMinutes: number;
}

const Timer = (props: ITimer) => {

  const {defaultMinutes} = props;

  const {minutes, seconds, isStartTimer, pauseTimer, startTimer} = useTimer(defaultMinutes);

  const onStartTimer = () => {
    startTimer();
  }

  const onPauseTimer = () => {
    pauseTimer();
  }

  return (
    <div className={s.t__timer}>
      <span>{minutes < 10 ? `0${minutes}` : minutes}</span>:
      <span>{seconds < 10 ? `0${seconds}` : seconds}</span>

      <div className={s.t__wrap_button}>
        {isStartTimer ? (
          <button onClick={onPauseTimer}>pause</button>
        ) : (
          <button onClick={onStartTimer}>start</button>
        )}
      </div>
    </div>
  );
};

export {Timer};
