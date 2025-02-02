import React, { useState } from "react";
import './main.css';

function App() {

  const [calc, setCalc] = useState([]);
  const [displayedValue, setdisplayedValue] = useState("teste");

  const contentToDisplay = document.querySelector(".displayContent")

  function clearDisplay(){
    contentToDisplay.innerText = "";
    setCalc([]);
  }

  function eraseLastElement(arrayOfElements){
    arrayOfElements.pop();
    console.log(arrayOfElements);
    contentToDisplay.innerText = "";
  }

  function getElement(element){
    calc.push(element)
    console.log(calc)
  }

  function displayValue(value){
    setdisplayedValue(value)
  }

  function getItemAndDisplay(value){
    getElement(value);
    displayValue(value);
  }

  function calculateExpression(arrayOfItens){
    const stringExpression = arrayOfItens.join(" ")
    const result = eval(stringExpression);
    console.log(result);

    return result;
  }

  return (
    <section className="calculatorBackground">
      <div className="calculatorContainer">
        <div className="upper">
          <p className="displayContent">{displayedValue}</p>
        </div>
        <div className="lower">
          <button onClick={() => clearDisplay()}>AC</button>
          <button>%</button>
          <button>/</button>
          <button>X</button>
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
          <button className="result" onClick={() => calculateExpression(calc)}>=</button>
          <button className="last-row" onClick={() => getItemAndDisplay("0")}>0</button>
          <button className="last-row" onClick={() => getItemAndDisplay(".")}>.</button>
          <button className="last-row" onClick={() => eraseLastElement(calc)}>Del</button>
        </div>
      </div>
    </section>
  );
}

export default App;
