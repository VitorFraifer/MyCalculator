import React, { useState } from "react";
import "./main.css";

function App() {
  const [calc, setCalc] = useState("");
  const [displayedValue, setDisplayedValue] = useState("0");

  function clearDisplay() {
    setCalc("");
    setDisplayedValue("0");
  }

  function eraseLastElement() {
    setCalc((prev) => prev.slice(0, -1));
    setDisplayedValue((prev) => prev.length > 1 ? prev.slice(0, -1) : "0");
  }

  function getItemAndDisplay(value) {
    setCalc((prev) => prev + value);
    setDisplayedValue((prev) => (prev === "0" ? value : prev + value));
  }

  function calculateExpression() {
    try {
      const result = eval(calc); // PERIGO: `eval` pode ser perigoso, veja nota abaixo.
      setCalc(result.toString());
      setDisplayedValue(result.toString());
    } catch (error) {
      setDisplayedValue("Erro");
      setCalc("");
    }
  }

  return (
    <section className="calculatorBackground">
      <div className="calculatorContainer">
        <div className="upper">
          <p className="displayContent">{displayedValue}</p>
        </div>
        <div className="lower">
          <button onClick={clearDisplay}>AC</button>
          <button onClick={() => getItemAndDisplay("%")}>%</button>
          <button onClick={() => getItemAndDisplay("/")}>/</button>
          <button onClick={() => getItemAndDisplay("*")}>X</button>
          <button onClick={() => getItemAndDisplay("7")}>7</button>
          <button onClick={() => getItemAndDisplay("8")}>8</button>
          <button onClick={() => getItemAndDisplay("9")}>9</button>
          <button onClick={() => getItemAndDisplay("+")}>+</button>
          <button onClick={() => getItemAndDisplay("4")}>4</button>
          <button onClick={() => getItemAndDisplay("5")}>5</button>
          <button onClick={() => getItemAndDisplay("6")}>6</button>
          <button onClick={() => getItemAndDisplay("-")}>-</button>
          <button onClick={() => getItemAndDisplay("1")}>1</button>
          <button onClick={() => getItemAndDisplay("2")}>2</button>
          <button onClick={() => getItemAndDisplay("3")}>3</button>
          <button className="result" onClick={calculateExpression}>=</button>
          <button className="last-row" onClick={() => getItemAndDisplay("0")}>0</button>
          <button className="last-row" onClick={() => getItemAndDisplay(".")}>.</button>
          <button className="last-row" onClick={eraseLastElement}>Del</button>
        </div>
      </div>
    </section>
  );
}

export default App;
