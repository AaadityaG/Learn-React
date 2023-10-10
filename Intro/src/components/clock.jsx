import React from "react";
import { Clock } from "digital-clock-react";
// import { myTimestamp } from "./consts";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

function Cl() {
  return (
    <div className="clock-container">
      <Clock
        isMode24H
        size="small"
        useInterval={false}
        // timestamp={myTimestamp}
      />

      <CountdownCircleTimer
        isPlaying
        duration={100}
        colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
        colorsTime={[7, 5, 2, 0]}
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
    </div>
  );
}

export default Cl;
