import React, { useState } from "react";
import AudioPlayer from "./audioplayer";
import Timer from "./Timer";

function App() {
  const [showComponent, setShowComponent] = useState(false);

  return (
    <>
      <div>
        {!showComponent && (
          <button
            class="btn btn-primary"
            onClick={() => setShowComponent(true)}
          >
            Start Milking
          </button>
        )}

        {showComponent && <Timer />}
      </div>
    </>
  );
}

export default App;
