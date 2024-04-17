import React, { useEffect, useRef, useState } from "react";

function AudioPlayer({ running, setRunning }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false); // Initialize isPlaying state to false

  useEffect(() => {
    const audio = audioRef.current;

    if (running) {
      audio.play(); // Play the audio when running state is true
      setIsPlaying(true); // Update isPlaying state to true
    } else {
      audio.pause();
      setIsPlaying(false); // Update isPlaying state to false
    }
  }, [running]); // Add running state as dependency

  return (
    <div>
      <audio ref={audioRef}>
        <source src="/Audio/trymusic.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
}

export default AudioPlayer;
