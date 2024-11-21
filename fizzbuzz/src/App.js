import React, { useState } from "react";
import styles from "./App.module.css";

function fizzBuzz() {
  const result = [];
  for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i);
    }
  }
  return result;
}

function App() {
  const [showList, setShowList] = useState(false);
  const fizzBuzzResult = fizzBuzz();

  return (
    <div className={styles.container}>
      <h1>FizzBuzz</h1>
      <button className={styles.button} onClick={() => setShowList(!showList)}>
        {showList ? "Свернуть" : "Запустить"}
      </button>
      {showList && (
        <ul className={styles.list}>
          {fizzBuzzResult.map((item, index) => (
            <li key={index} className={styles.listItem}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
