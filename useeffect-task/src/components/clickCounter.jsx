import React from "react";
import { useState, useEffect } from "react";

const ClickCounter = () => {
  let savedNumber = JSON.parse(localStorage.clickCounter);
  const [count, setCount] = useState(0);
  useEffect(() => {
    const getCount = savedNumber;
    setCount(+getCount);
  }, []);
  const handleClick = () => {
    setCount((count) => count + 1);
  };
  useEffect(() => {
    localStorage.setItem("clickCounter", count);
  }, [count]);
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={handleClick}>Click Me!</button>
    </div>
  );
};

export default ClickCounter;
