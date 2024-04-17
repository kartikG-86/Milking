import React, { useState, useRef } from "react";
import Lottie from "react-lottie";
import Howler from "react-howler";
import cowAnimationData from "./cow-animation.json"; // Import your Lottie animation data

const CowAnimation = ({ running }) => {
  const animationRef = useRef(null);

  const handleButtonClick = () => {
    if (!running) {
      animationRef.current.pause();
    } else {
      animationRef.current.play();
    }
  };

  const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData: cowAnimationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh",
      }}
    >
      <div style={{ position: "relative" }}>
        <Lottie
          options={defaultOptions}
          height={200}
          width={200}
          isStopped={!running}
          ref={animationRef}
        />
       
      </div>
    </div>
  );
};

export default CowAnimation;
