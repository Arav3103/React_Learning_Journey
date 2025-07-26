import React, { useContext, useRef } from "react";
import ThemeContext from "../ThemeContext";

const Counter = () => {
  const { isLogged, toggleLogin } = useContext(ThemeContext);
  const counter = useRef(0);
  counter.current += 1;
  console.log("🔁 Counter re-rendered");
  return (
    <>
      <p>
        Current Value is {counter.current} $ {isLogged && "HI"}
      </p>
      <button onClick={toggleLogin}>update</button>
    </>
  );
};

export default Counter;
