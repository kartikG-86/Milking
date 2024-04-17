import React, { useState } from "react";
import AudioPlayer from "./audioplayer";
import Timer from "./Timer";
import { Link } from "react-router-dom";

const Milking = () => {
  return (
    <>
    
      <div class="container-fluid py-5" style={{overflow:'hidden'}} >
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
        <div class=" my-3 container-fluid d-flex justify-content-center">
        <img class="d-block " style={{width:'10rem'}} src="https://i.gifer.com/Za9e.gif"/>
        </div>
      </div>
      
    </>
  );
}

export default Milking;
