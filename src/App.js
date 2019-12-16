import React, { useState } from "react";
import Display from "./components/Display";
import Dashboard from "./components/Dashboard";

import "./App.css";

export const addStrike = currentStrikeCount => {
  return currentStrikeCount + 1;
};

export const resetCount = (setBalls, setStrikes) => {
  setBalls(0);
  setStrikes(0);
};

function App() {
  let [balls, setBalls] = useState(0);
  let [strikes, setStrikes] = useState(0);

  function increaseStrikes() {
    if (strikes === 2) {
      resetCount(setBalls, setStrikes);
    } else {
      setStrikes(addStrike(strikes));
    }
  }

  function increaseBalls() {
    if (balls === 3) {
      resetCount(setBalls, setStrikes);
    } else {
      setBalls(balls => balls + 1);
    }
  }

  function foulBall() {
    if (strikes < 2) {
      setStrikes(addStrike(strikes));
    }
  }

  function hit() {
    resetCount(setBalls, setStrikes);
  }

  return (
    <div className="App">
      <Display balls={balls} strikes={strikes} />
      <Dashboard
        increaseStrikes={increaseStrikes}
        increaseBalls={increaseBalls}
        foulBall={foulBall}
        hit={hit}
      />
    </div>
  );
}

export default App;
