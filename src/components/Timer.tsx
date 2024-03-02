import React from "react";
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
  console.log(seconds);

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

const Timer: React.FC<TimerProps> = ({ timeSec }) => {
  const time = new Date();
  time.setSeconds(time.getSeconds() + timeSec);

  return (
    <div>
      <MyTimer expiryTimestamp={time} />
    </div>
  );
};

export default Timer;
