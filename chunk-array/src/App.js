import React, { useState } from "react";
import styles from "./App.module.css";

function chunkArray(array, size) {
  const chunkedArray = [];
  for (let i = 0; i < array.length; i += size) {
    chunkedArray.push(array.slice(i, i + size));
  }
  return chunkedArray;
}

function App() {
  const [inputArray, setInputArray] = useState("");
  const [arraySize, setArraySize] = useState(2);
  const [chunkedArray, setChunkedArray] = useState([]);
  const [error, setError] = useState("");

  const handleArrayChange = (event) => {
    setInputArray(event.target.value);
  };

  const handleSizeChange = (event) => {
    setArraySize(parseInt(event.target.value, 10) || 2);
  };

  const handleSubmit = () => {
    setError("");
    try {
      const array = JSON.parse(`[${inputArray}]`);
      if (!Array.isArray(array) || array.some(isNaN)) {
        throw new Error(
          "Неверный формат массива. Введите числа, разделенные запятыми."
        );
      }
      const result = chunkArray(array, arraySize);
      setChunkedArray(result);
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Разбиение массива на части</h1>
      <div className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="arrayInput">Массив (числа через запятую):</label>
          <input
            type="text"
            id="arrayInput"
            value={inputArray}
            onChange={handleArrayChange}
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="sizeInput">Размер части:</label>
          <input
            type="number"
            id="sizeInput"
            value={arraySize}
            onChange={handleSizeChange}
            min="1"
            className={styles.input}
          />
        </div>
        <button onClick={handleSubmit} className={styles.button}>
          Разбить массив
        </button>
      </div>
      {error && <p className={styles.error}>{error}</p>}
      {chunkedArray.length > 0 && (
        <div className={styles.resultContainer}>
          <h2 className={styles.resultTitle}>Результат:</h2>
          <div className={styles.chunkContainer}>
            {chunkedArray.map((chunk, index) => (
              <div key={index} className={styles.chunk}>
                {chunk.map((num) => (
                  <span key={num} className={styles.number}>
                    {num}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
