import React, { useContext } from "react";
import ThemeContext from "../ThemeContext";

const Card = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  console.log("Card Rendered");

  return (
    <div
      className={
        theme ? "bg-black text-gray-50 h-screen" : "text-black h-screen"
      }
    >
      <h1>Context API</h1>
      <p>Current Theme is {theme ? "Dark" : "Light"}</p>
      <button
        type="button"
        onClick={toggleTheme}
        className={
          theme
            ? "bg-black text-gray-50 p-2 border-gray-100 border-2"
            : " border-2 text-black p-2 border-black"
        }
      >
        {" "}
        Change theme
      </button>
    </div>
  );
};

export default Card;
