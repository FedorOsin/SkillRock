import React, { useState } from "react";
import styles from "./App.module.css";

function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

function App() {
  const [count, setCount] = useState(0);
  const [lastCallTime, setLastCallTime] = useState(null);

  const handleButtonClick = () => {
    const now = new Date();
    setLastCallTime(now);
    setCount((prevCount) => prevCount + 1);
  };

  const debouncedHandleButtonClick = debounce(handleButtonClick, 2000);

  return (
    <div className={styles.container}>
      <h1>Пример использования debounce</h1>
      <p>Счёт: {count}</p>
      {lastCallTime && (
        <p>Последний вызов: {lastCallTime.toLocaleTimeString()}</p>
      )}
      <button className={styles.button} onClick={debouncedHandleButtonClick}>
        Нажать
      </button>
    </div>
  );
}

export default App;
