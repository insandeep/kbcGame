import { useEffect, useState } from "react";

function Timer({ setStop, qNo }) {
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    if (timer === 0) return setStop(true);

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [setStop, timer]);

  useEffect(() => {
    setTimer(30);
  }, [qNo]);
  return timer;
}

export default Timer;
