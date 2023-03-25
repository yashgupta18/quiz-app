import { useEffect } from "react";

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;

const Timer = ({ time,setTime, onExpire }) => {

  useEffect(() => {
    const timerId = setTimeout(() => {
      setTime(time - 1000);
    }, 1000);

    if (time <= 0) {
      onExpire && onExpire();
      clearTimeout(timerId);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [time, setTime,onExpire]);

  const getFormattedTime = (time) => {
    const minutes = Math.floor((time % HOUR) / MINUTE);
    const seconds = Math.floor((time % MINUTE) / SECOND);

    return `${minutes}:${seconds}`;
  };
  return getFormattedTime(time);
};

Timer.defaultProps = {
  duration: 60 * 1000
};

export default Timer;
