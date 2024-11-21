import React, { useState } from "react";
import styles from "./App.module.css";

function deepClone(obj) {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(deepClone);
  }

  const clonedObj = {};
  for (const key in obj) {
    clonedObj[key] = deepClone(obj[key]);
  }
  return clonedObj;
}

function App() {
  const original = {
    name: "Иван",
    address: { city: "Москва", country: "РФ" },
    hobbies: ["чтение", "плавание"],
  };

  const [originalObj, setOriginalObj] = useState(original);
  const [clonedObj, setClonedObj] = useState(deepClone(original));

  const changeCity = () => {
    const newClonedObj = deepClone(clonedObj);
    newClonedObj.address.city = "Ростов";
    setClonedObj(newClonedObj);
  };

  return (
    <div className={styles.container}>
      <h1>Пример глубокого клонирования</h1>
      <div className={styles.section}>
        <h2>Начальный Объект</h2>
        <pre>{JSON.stringify(originalObj, null, 2)}</pre>
      </div>
      <div className={styles.section}>
        <h2>Клонированный Объект</h2>
        <pre>{JSON.stringify(clonedObj, null, 2)}</pre>
        <button className={styles.button} onClick={changeCity}>
          Изменить город на Ростов
        </button>
      </div>
    </div>
  );
}

export default App;
