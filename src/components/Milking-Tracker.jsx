import React, { useState } from "react";
import AudioPlayer from "./audioplayer";
import Timer from "./Timer";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <div class="container-fluid py-5 my-5">
        <Link to="/startTimer" style={{ textDecoration: "none" }}>
        <button
              class="btn btn-success btn-dark mx-5 my-5 fs-5"
              style={{
                backgroundColor: 'black',
                borderRadius: "2rem",
                width: "15rem",
                color:'white'
              }}
            >
              Start Milking
            </button>
        </Link>
      </div>
    </>
  );
}

export default App;
