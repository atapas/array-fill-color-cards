import React, { useState } from "react";
import "./style.css";

let randomColor = require("randomcolor");

export default function App() {
  const [colors, setColors] = useState(["red", "blue", "green"]);

  const setToColor = color => {
    const temp = colors.fill(color);
    console.log(temp);
    setColors([...temp]);
  };

  return (
    <>
      <h1>Color Cards: Array.fill() method demo</h1>
      <button onClick={() => setToColor("red")}>Set all to Red</button>{" "}
      <button onClick={() => setToColor("blue")}>Set all to Blue</button>{" "}
      <button onClick={() => setToColor("green")}>Set all to Green</button>{" "}
      <button onClick={() => setToColor(randomColor())}>
        Set all to Random
      </button>
      <div className="cards">
        {colors.map((color, i) => (
          <div className="card" style={{ backgroundColor: color }} key={i}>
            {color}
          </div>
        ))}
      </div>
    </>
  );
}
