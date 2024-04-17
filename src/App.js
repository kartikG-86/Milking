import logo from "./logo.svg";
import "./App.css";
import MilkingTracker from "./components/Milking-Tracker";
import Home from "./components/Home";
import History from "./components/History";
import Navbar from "./components/Navbar";
import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Timer from "./components/Timer";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <Home />
        <History />
        <MilkingTracker />

      </header> */}
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<MilkingTracker />} />
          <Route path="/history" element={<History />} />
          <Route path="/startTimer" element={<Timer />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
