import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import moment from 'moment';
import AudioPlayer from "./audioplayer";

export default function Timer() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(true);
  const timer = useRef(null);
  const [player, setPlayer] = useState(true);
  const date = new Date();
  const startTime =
  const endTime = 
  useEffect(() => {
    if (running) {
      startTimer();
    } else {
      stopTimer();
    }
  }, [running]);

  const startTimer = () => {
    if (timer.current === null) {
      timer.current = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
  };

  const stopTimer = () => {
    if (timer.current !== null) {
      clearInterval(timer.current);
      timer.current = null;
    }
  };

  const handleStart = () => {
    setRunning(true);
  };

  const handlePause = () => {
    setRunning(false);
  };

  const handleStop = () => {
     setRunning(false);
    setTime(0);
    
    
     const milkQuantity = prompt("Enter the quantity of milk");
     console.log(milkQuantity);
  };

  return (
    <div className="watch">
      <p className="timer">{format(time)}</p>
      <div className="actions">
        <button onClick={running ? handlePause : handleStart}>
          {running ? "Pause" : "Resume"}
        </button>
        <button className="stopbtn" type="button" onClick={handleStop}>
          Stop
        </button>
        <AudioPlayer running={running} setRunning={setRunning} />
      </div>
    </div>
  );
}

const format = (time) => {
  let hours = Math.floor((time / 60 / 60) % 24);
  let minutes = Math.floor((time / 60) % 60);
  let seconds = Math.floor(time % 60);
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  return hours + ":" + minutes + ":" + seconds;
};
