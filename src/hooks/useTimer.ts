import React from "react";

const useTimer = (defaultMinutes: number) => {
  const [minutes, setMinutes] = React.useState(defaultMinutes);
  const [seconds, setSeconds] = React.useState(0);
  const [isStartTimer, setIsStartTimer] = React.useState(false);

  React.useEffect(() => {
    let interval;
    if (isStartTimer && (minutes > 0 || seconds > 0)) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(interval);
            setIsStartTimer(false);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isStartTimer, minutes, seconds]);

  return {
    minutes,
    seconds,
    isStartTimer,
    startTimer: () => setIsStartTimer(true),
    pauseTimer: () => setIsStartTimer(false),
  };
}

export default useTimer;
