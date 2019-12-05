import React from "react";

const Display = ({ balls, strikes }) => {
  return (
    <>
      <p>Balls: {balls}</p>
      <p>Strikes: {strikes}</p>
    </>
  );
};

export default Display;
