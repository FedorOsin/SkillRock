import React, { useState, useEffect } from "react";
import styles from "./App.module.css";

function App() {
  return (
    <div className="App">
      <FetchRandomUsers />
    </div>
  );
}

function FetchRandomUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=10");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setUsers(data.results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>Не удалось загрузить пользователей: {error.message}</div>;
  }

  return (
    <div className={styles.App}>
      <h1>Случайные пользователи</h1>
      <ul>
        {users.map((user) => (
          <li key={user.login.uuid} className={styles.listItem}>
            <img
              src={user.picture.large}
              alt={`${user.name.first} ${user.name.last}`}
              className={styles.userImage}
            />
            <h3>{`${user.name.first} ${user.name.last}`}</h3>
            <p>{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
