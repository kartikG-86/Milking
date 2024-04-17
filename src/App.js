import logo from "./logo.svg";
import "./App.css";
import MilkingTracker from "./components/Milking-Tracker";
import Home from "./components/Home";
import History from "./components/History";
import CowAnimation from "./CowAnimation";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home />
        <History />
        <MilkingTracker />
        {/* <CowAnimation /> */}
        {/* <Timer /> */}
      </header>
    </div>
  );
}

export default App;
