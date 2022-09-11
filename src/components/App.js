import React, { useEffect, useState } from "react";
import "../styles/App.css";
const App = () => {
  const [inputValueText, setInputValueText] = useState("");
  const [inputValueNumber, setInputValueNumber] = useState(0);

  const handleInput = (event) => {
    switch (event.target.id) {
      case "text-input": {
        setInputValueText(event.target.value);
        break;
      }
      case "num-input": {
        setInputValueNumber(event.target.value);
        break;
      }
      default: {
        return;
      }
    }
  };

  useEffect(() => {
    console.log(`Input in #text-input is ${inputValueText}`);
  }, [inputValueText]);

  useEffect(() => {
    console.log(`Input in #num-input is ${inputValueNumber}`);
  }, [inputValueNumber]);

  return (
    <div id="main">
      <label htmlFor="text-input">Text Input:- </label>
      <input
        id="text-input"
        type="text"
        value={inputValueText}
        onChange={handleInput}
      />
      <br />
      <label htmlFor="num-input">Number input</label>
      <input
        id="num-input"
        type="number"
        value={inputValueNumber}
        onChange={handleInput}
      />
    </div>
  );
};

export default App;
