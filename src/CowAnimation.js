import React, { useState, useRef } from "react";
import Lottie from "react-lottie";
import Howler from "react-howler";
import cowAnimationData from "./cow-animation.json"; // Import your Lottie animation data


const CowAnimation = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const animationRef = useRef(null);

  const handleButtonClick = () => {
    setIsPlaying(!isPlaying);
    if (isPlaying) {
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
        height: "100vh",
      }}
    >
      <div style={{ position: "relative" }}>
        <Lottie
          options={defaultOptions}
          height={400}
          width={400}
          isStopped={!isPlaying}
          ref={animationRef}
        />
        <button
          style={{
            position: "relative",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: isPlaying ? "red" : "green",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={handleButtonClick}
        >
          {isPlaying ? "Stop" : "Play"}
        </button>
        {isPlaying && <Howler src="/Audio/trymusic.mp3" playing={true} />}
      </div>
    </div>
  );
};

export default CowAnimation;
