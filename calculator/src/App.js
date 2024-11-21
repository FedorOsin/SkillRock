import React, { useState } from "react";
import styles from "./Calculator.module.css";

class Calculator {
  constructor() {}

  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    if (b === 0) {
      return "Ошибка: Деление на ноль";
    }
    return a / b;
  }
}

const calculator = new Calculator();

const App = () => {
  const [display, setDisplay] = useState("0");
  const [num1, setNum1] = useState(0);
  const [operator, setOperator] = useState("");

  const handleNumberClick = (num) => {
    if (display === "0") {
      setDisplay(num.toString());
    } else {
      setDisplay(display + num);
    }
  };

  const handleOperatorClick = (op) => {
    setNum1(parseFloat(display));
    setOperator(op);
    setDisplay("0");
  };

  const handleEqualsClick = () => {
    const num2 = parseFloat(display);
    let result;

    switch (operator) {
      case "+":
        result = calculator.add(num1, num2);
        break;
      case "-":
        result = calculator.subtract(num1, num2);
        break;
      case "*":
        result = calculator.multiply(num1, num2);
        break;
      case "/":
        result = calculator.divide(num1, num2);
        break;
      default:
        result = num2;
    }

    setDisplay(result.toString());
    setNum1(0);
    setOperator("");
  };

  const handleClearClick = () => {
    setDisplay("0");
    setNum1(0);
    setOperator("");
  };

  return (
    <div className={styles.container}>
      <div className={styles.calculator}>
        <div className={styles.display}>{display}</div>
        <div className={styles.buttons}>
          <button onClick={() => handleNumberClick(7)}>7</button>
          <button onClick={() => handleNumberClick(8)}>8</button>
          <button onClick={() => handleNumberClick(9)}>9</button>
          <button onClick={() => handleOperatorClick("/")}>/</button>
          <button onClick={() => handleNumberClick(4)}>4</button>
          <button onClick={() => handleNumberClick(5)}>5</button>
          <button onClick={() => handleNumberClick(6)}>6</button>
          <button onClick={() => handleOperatorClick("*")}>*</button>
          <button onClick={() => handleNumberClick(1)}>1</button>
          <button onClick={() => handleNumberClick(2)}>2</button>
          <button onClick={() => handleNumberClick(3)}>3</button>
          <button onClick={() => handleOperatorClick("-")}>-</button>
          <button onClick={() => handleNumberClick(0)}>0</button>
          <button onClick={() => handleEqualsClick()}>=</button>
          <button onClick={() => handleOperatorClick("+")}>+</button>
          <button onClick={() => handleClearClick()}>C</button>
        </div>
      </div>
    </div>
  );
};

export default App;
