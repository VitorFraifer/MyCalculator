import './main.css';

function App() {
  return (
    <section className="calculatorBackground">
      <div className="calculatorContainer">
        <div className="upper">

        </div>
        <div className="lower">
          <button>AC</button>
          <button>Del</button>
          <button>÷</button>
          <button>X</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>+</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>-</button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button className="result">=</button>
          <button className="last-row">0</button>
          <button className="last-row">.</button>
        </div>
      </div>
    </section>
  );
}

export default App;
