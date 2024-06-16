import React, { useState } from "react";

function App() {
  setInterval(updateTime, 1000); //the updateTime function renders every second.You can comment this line, to try to get the updated time by pressing the button "Get time"

  const now = new Date().toLocaleTimeString("en-GB");

  const [time, setTime] = useState(now);

  function updateTime() {
    const newTime = new Date().toLocaleTimeString("en-GB");
    setTime(newTime);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
