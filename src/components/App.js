import React, { useState } from "react";
import "../styles/App.css";
const App = () => {
  const [inputValueText, setInputValueText] = useState("");
  const [itemText, setItemText] = useState([]);
  const [inputValueNumber, setInputValueNumber] = useState("");
  const [itemNumber, setItemNumber] = useState([]);

  const handleInput = (event) => {
    // use console.log
    setInputValueText(event.target.value);
    setItemText((oldItemText) => {
      return [...oldItemText, inputValueText];
    });
    setInputValueNumber(event.target.value);
    setItemNumber((oldItemNumber) => {
      return [...oldItemNumber, inputValueNumber];
    });
  };
  // function handleOnChange1(e) {
  //   setInputValueText(e.target.value);
  // }
  // function handleOnChange2(event) {
  //   setInputValueNumber(event.target.value);
  // }
  // do not change id of input elements
  return (
    <div id="main">
      <label htmlFor="text-input">Text Input:- </label>
      <input
        id="text-input"
        type="text"
        value="inputValueText"
        onChange={handleInput}
        // onChange={handleOnChange1}
      />
      {/* type={"text"} */}
      <br />
      <ul>
        {itemText.map((value1) => {
          return console.log(value1);
        })}
      </ul>
      <br />
      <label htmlFor="num-input">Number input</label>
      <input
        id="num-input"
        type="number"
        value="inputValueNumber"
        onChange={handleInput}
        // onChange={handleOnChange2}
      />
      <ul>
        {itemNumber.map((value2) => {
          return console.log(value2);
        })}
      </ul>
      {/* type={"number"} */}
      <br />
    </div>
  );
};

export default App;
