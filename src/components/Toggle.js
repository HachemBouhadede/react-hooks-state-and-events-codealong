import React, { useState } from "react";

function Toggle() {
  const [isToggle , setToggle] = useState(true);
  function handleClick() {
    setToggle((isToggle) => !isToggle);
  }
  const color = isToggle ? "red" : "white";
  return <button style={{ background: color }} onClick={handleClick}>{isToggle ? "ON" : "OFF"}</button>
}

export default Toggle;
