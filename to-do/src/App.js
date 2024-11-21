import React, { useState } from "react";
import styles from "./App.module.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState("all");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const toggleComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true;
    if (filter === "completed") return task.completed;
    if (filter === "incomplete") return !task.completed;
    return true;
  });

  return (
    <div className={styles.container}>
      <h1>Список дел</h1>
      <div className={styles.inputContainer}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Добавить задачу..."
          className={styles.input}
        />
        <button onClick={addTask} className={styles.addButton}>
          Добавить
        </button>
      </div>
      <div className={styles.filterButtons}>
        <button
          onClick={() => setFilter("all")}
          className={styles.filterButton}
        >
          Все
        </button>
        <button
          onClick={() => setFilter("completed")}
          className={styles.filterButton}
        >
          Завершенные
        </button>
        <button
          onClick={() => setFilter("incomplete")}
          className={styles.filterButton}
        >
          Незавершенные
        </button>
      </div>
      <ul className={styles.taskList}>
        {filteredTasks.map((task, index) => (
          <li key={index} className={styles.task}>
            <span
              onClick={() => toggleComplete(index)}
              className={`${task.completed ? styles.taskCompleted : ""} ${
                styles.taskSpan
              }`}
            >
              {task.text}
            </span>
            <button
              onClick={() => deleteTask(index)}
              className={styles.deleteButton}
            >
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
