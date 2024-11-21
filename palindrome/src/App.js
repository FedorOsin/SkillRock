import React, { useState } from "react";
import styles from "./App.module.css";

function isLatinPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  return str === str.split("").reverse().join("");
}

function isCyrillicPalindrome(str) {
  str = str.toLowerCase().replace(/[^а-яА-Я0-9]/g, "");
  return str === str.split("").reverse().join("");
}

function App() {
  const [inputString, setInputString] = useState("");
  const [isPalindromeResult, setIsPalindromeResult] = useState(null);
  const [alphabet, setAlphabet] = useState("latin");

  const handleInputChange = (event) => {
    setInputString(event.target.value);
  };

  const handleCheckPalindrome = () => {
    const result =
      alphabet === "latin"
        ? isLatinPalindrome(inputString)
        : isCyrillicPalindrome(inputString);
    setIsPalindromeResult(result);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Проверка на палиндром</h1>
      <select
        className={styles.select}
        value={alphabet}
        onChange={(e) => setAlphabet(e.target.value)}
      >
        <option value="latin">Латиница</option>
        <option value="cyrillic">Кириллица</option>
      </select>
      <input
        type="text"
        className={styles.input}
        placeholder="Введите строку"
        value={inputString}
        onChange={handleInputChange}
      />
      <button className={styles.button} onClick={handleCheckPalindrome}>
        Проверить
      </button>
      {isPalindromeResult !== null && (
        <p className={styles.result}>
          Результат: {isPalindromeResult ? "Палиндром" : "Не палиндром"}
        </p>
      )}
    </div>
  );
}

export default App;
