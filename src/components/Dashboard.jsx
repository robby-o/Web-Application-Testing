import React from "react";

const Dashboard = ({ increaseStrikes, increaseBalls, foulBall, hit }) => {
  return (
    <>
      <button onClick={increaseStrikes}>Add Strike</button>
      <button onClick={increaseBalls}>Add Ball</button>
      <button onClick={foulBall}>Add Foul</button>
      <button onClick={hit}>Add Hit</button>
    </>
  );
};

export default Dashboard;
