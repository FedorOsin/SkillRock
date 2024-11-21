import React, { useState } from "react";
import Library from "./Library";
import Book from "./Book";
import styles from "./LibraryApp.module.css";

function LibraryApp() {
  const [library, setLibrary] = useState(new Library());
  const [newBookTitle, setNewBookTitle] = useState("");
  const [newBookAuthor, setNewBookAuthor] = useState("");
  const [newBookIsbn, setNewBookIsbn] = useState("");
  const [borrowIsbn, setBorrowIsbn] = useState("");
  const [returnIsbn, setReturnIsbn] = useState("");
  const [showBorrowedList, setShowBorrowedList] = useState(false);

  const addBook = () => {
    const newBook = new Book(newBookTitle, newBookAuthor, newBookIsbn);
    setLibrary((prevLibrary) => {
      const newLibrary = new Library();
      newLibrary.books = [...prevLibrary.books, newBook];
      return newLibrary;
    });
    setNewBookTitle("");
    setNewBookAuthor("");
    setNewBookIsbn("");
  };

  const borrow = () => {
    setLibrary((prevLibrary) => {
      const newLibrary = new Library();
      newLibrary.books = [...prevLibrary.books];
      newLibrary.borrowBook(borrowIsbn);
      return newLibrary;
    });
    setBorrowIsbn("");
  };

  const returnBook = () => {
    setLibrary((prevLibrary) => {
      const newLibrary = new Library();
      newLibrary.books = [...prevLibrary.books];
      newLibrary.returnBook(returnIsbn);
      return newLibrary;
    });
    setReturnIsbn("");
  };

  const toggleBorrowedList = () => {
    setShowBorrowedList(!showBorrowedList);
  };

  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Добавить книгу</h2>
        <div className={styles.inputContainer}>
          <input
            className={styles.input}
            type="text"
            value={newBookTitle}
            onChange={(e) => setNewBookTitle(e.target.value)}
            placeholder="Название"
          />
          <input
            className={styles.input}
            type="text"
            value={newBookAuthor}
            onChange={(e) => setNewBookAuthor(e.target.value)}
            placeholder="Автор"
          />
          <input
            className={styles.input}
            type="text"
            value={newBookIsbn}
            onChange={(e) => setNewBookIsbn(e.target.value)}
            placeholder="ISBN"
          />
        </div>
        <button className={styles.button} onClick={addBook}>
          Добавить
        </button>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Взять книгу</h2>
        <input
          className={styles.input}
          type="text"
          value={borrowIsbn}
          onChange={(e) => setBorrowIsbn(e.target.value)}
          placeholder="ISBN"
        />
        <button className={styles.button} onClick={borrow}>
          Взять
        </button>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Вернуть книгу</h2>
        <input
          className={styles.input}
          type="text"
          value={returnIsbn}
          onChange={(e) => setReturnIsbn(e.target.value)}
          placeholder="ISBN"
        />
        <button className={styles.button} onClick={returnBook}>
          Вернуть
        </button>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Взятые книги</h2>
        <button className={styles.button} onClick={toggleBorrowedList}>
          {showBorrowedList ? "Скрыть список" : "Показать список"}
        </button>
        {showBorrowedList && (
          <ul className={`${styles.bookList} ${styles.borrowedList}`}>
            {library.listBorrowedBooks().map((book) => (
              <li key={book.isbn} className={styles.bookItem}>
                {book.title} by {book.author} (ISBN: {book.isbn})
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Доступные книги</h2>
        <ul className={styles.bookList}>
          {library.listAvailableBooks().map((book) => (
            <li key={book.isbn} className={styles.bookItem}>
              {book.title} by {book.author} (ISBN: {book.isbn}) -{" "}
              {book.available ? "Доступна" : "Взята"}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default LibraryApp;
