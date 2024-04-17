import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import moment from "moment";
import "../App.css";
import AudioPlayer from "./audioplayer";
import CowAnimation from "../CowAnimation";

const Timer = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(true);
  const [pauseTime, setPauseTime] = useState("00:00:00");

  const timer = useRef(null);
  const [showAnimation, setShowAnimation] = useState(false);
  const date = new Date();

  let options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  useEffect(() => {
    if (running) {
      startTimer();setShowAnimation(true);
    } else {
      stopTimer();setShowAnimation(true);
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
    setShowAnimation(true);
  };

  const handlePause = () => {
    setPauseTime(format(time));
    setRunning(false);
  };

  const handleStop = () => {
    console.log(format(time));
    console.log(pauseTime);
    const milkQuantity = prompt("Enter the quantity of milk");

    if (milkQuantity) {
      const data = {
        quantity: milkQuantity,
        endTime: format(time),
        startTime: "00:00:00",
        storeDate: date.toLocaleDateString("en-US", options),
      };

      let localData = localStorage.getItem("milk_data");
      localData = localData ? JSON.parse(localData) : [];
      localData.push(data);
      localData = JSON.stringify(localData);
      localStorage.setItem("milk_data", localData);
    }
    setRunning(false);
    setTime(0);
  };

  return (
    <div class="container-fluid py-5">
      <div className="text-center my-5">
        <h1 className="responsive-font" style={{ fontSize: "bold" }}>
          {format(time)}
        </h1>
      </div>
      <div className="row">
        <div class="col-xs-12 col-md-6">
          <div class="d-flex justify-content-center justify-content-md-end">
            <button
              class="btn btn-success btn-dark mx-5 my-3 fs-5"
              style={{
                backgroundColor: running ? "	#CC5500" : "#097969",
                borderRadius: "2rem",
                width: "8rem",
              }}
              onClick={running ? handlePause : handleStart}
            >
              {running ? "Pause" : "Resume"}
            </button>
          </div>
        </div>
        <div class="col-xs-12 col-md-6">
          <div class="d-flex justify-content-center justify-content-md-start">
            <button
              type="button"
              class="btn btn-success btn-dark mx-5 my-3 fs-5 col-6"
              style={{
                backgroundColor: "#811331",
                borderRadius: "2rem",
                width: "8rem",
              }}
              onClick={handleStop}
            >
              Stop
            </button>
          </div>
        </div>
      </div>
      <AudioPlayer running={running} setRunning={setRunning} />
      <CowAnimation running={running} />
    </div>
  );
};

const format = (time) => {
  let hours = Math.floor((time / 60 / 60) % 24);
  let minutes = Math.floor((time / 60) % 60);
  let seconds = Math.floor(time % 60);
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  return hours + ":" + minutes + ":" + seconds;
};

export default Timer;
