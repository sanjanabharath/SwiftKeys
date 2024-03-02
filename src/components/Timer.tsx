import React, { useState } from "react";
import { useTimer } from "react-timer-hook";

interface TimerProps {
  timeSec: number;
}

//@ts-ignore
function MyTimer({ expiryTimestamp }) {
  const {
    seconds,
    minutes,

    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ fontSize: "100px" }}>
        <span>{minutes}</span>:<span>{seconds}</span>
      </div>

      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={resume}>Resume</button>
      <button
        onClick={() => {
          const time = new Date();
          time.setSeconds(time.getSeconds() + expiryTimestamp);
          restart(time);
        }}
      >
        Restart
      </button>
    </div>
  );
}

const Timer: React.FC = () => {
  const [timing, setTiming] = useState(30);
  const time = new Date();
  time.setSeconds(time.getSeconds() + timing);

  return (
    <div>
      <button onClick={() => setTiming(30)}>30 sec</button>
      <button onClick={() => setTiming(60)}>1 min</button>
      <button onClick={() => setTiming(120)}>2 mins</button>
      <MyTimer expiryTimestamp={time} />
    </div>
  );
};

export default Timer;
