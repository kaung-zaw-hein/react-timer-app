import React from "react";
import { useContext } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { Context } from "../../context/Context";

const CountdownAnimation = ({  timer, animate, children }) => {
  const { stopAimate } = useContext(Context);


  return (
    <CountdownCircleTimer
      key={timer}
      isPlaying={animate}
      duration={timer * 60}
      colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[10, 6, 3, 0]}
      strokeWidth={6}
      size={220}
      trailColor="#151932"
      onComplete={() => {
        stopAimate();
      }}
    >
      {children}
    </CountdownCircleTimer>
  );
};

export default CountdownAnimation;
