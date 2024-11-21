import Book from "./Book";

class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    if (!(book instanceof Book)) {
      throw new Error("Некорректный объект книги");
    }
    this.books.push(book);
  }

  borrowBook(isbn) {
    const book = this.books.find((book) => book.isbn === isbn);
    if (book && book.available) {
      book.available = false;
      return book;
    } else {
      return null;
    }
  }

  returnBook(isbn) {
    const book = this.books.find((book) => book.isbn === isbn);
    if (book && !book.available) {
      book.available = true;
    }
  }

  listAvailableBooks() {
    return this.books.filter((book) => book.available);
  }

  listBorrowedBooks() {
    return this.books.filter((book) => !book.available);
  }
}

export default Library;
