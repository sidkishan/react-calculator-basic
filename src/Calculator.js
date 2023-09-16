import React, { useState } from "react";

const Calculator = () => {
  //1. Using the hooks i.e useStates
  //2. Validation functions
  //3. Operation Functions +,-,*,/
  //4. Writing the JSX
  //5. Styling
  //6. Deploying

  let [input1, setInput1] = useState("");
  let [input2, setInput2] = useState("");
  let [result, setResult] = useState(null);
  let [error, setError] = useState(null);
  function validateInput() {
    if (input1 === "" || input2 === "" || isNaN(input1) || isNaN(input2)) {
      setError("please give the valid inputs");
      setResult(null);
      return false;
    }
    setError(null);
    return true;
  }
  function add() {
    if (validateInput()) {
      setResult(parseFloat(input1) + parseFloat(input2));
    }
  }
  function subtract() {
    if (validateInput()) {
      setResult(parseFloat(input1) - parseFloat(input2));
    }
  }
  function multiply() {
    if (validateInput()) {
      setResult(parseFloat(input1) * parseFloat(input2));
    }
  }
  function divide() {
    if (validateInput()) {
      if (input2 !== "0") setResult(parseFloat(input1) / parseFloat(input2));
      else {
        setError("divide by zero is not allowed");
        setResult(null);
      }
    }
  }
  return (
    <div className="calculator">
      <input
        type="text"
        placeholder="Num 1"
        value={input1}
        onChange={(event) => setInput1(event.target.value)}
      />
      <input
        type="text"
        placeholder="Num 2"
        value={input2}
        onChange={(event) => setInput2(event.target.value)}
      />
      <div className="buttons">
        <button onClick={add}>+</button>
        <button onClick={subtract}>-</button>
        <button onClick={multiply}>*</button>
        <button onClick={divide}>/</button>
      </div>
      <div className="result">
        {error && (
          <div>
            <p className="error">Error:</p>
            {error}
          </div>
        )}
        {result !== null && (
          <div>
            {" "}
            <p className="success">Success!</p>
            Result: {result}
          </div>
        )}
      </div>
    </div>
  );
};
export default Calculator;
