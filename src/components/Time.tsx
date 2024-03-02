import React, { useState } from "react";
import Timer from "./Timer";

const Time: React.FC = () => {
  const [time, setTime] = useState(0);

  return (
    <div>
      <button onClick={() => setTime(30)}>30 sec</button>
      <button onClick={() => setTime(60)}>1 min</button>
      <button onClick={() => setTime(120)}>2 mins</button>
      <button onClick={() => setTime(300)}>5 mins</button>
      <Timer timeSec={time} />
    </div>
  );
};

export default Time;
