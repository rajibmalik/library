import { BookCard } from "./BookCard.js";
import { Book } from "./Book.js";

export class Library {
  constructor() {
    this.myLibrary = [];
    this.cardGrid = document.getElementById("cardGrid");
  }

  addBookToLibrary(book) {
    this.myLibrary.push(book);
    this.cardGrid.innerHTML = "";
    this.printBooks();
  }

  printBooks() {
    let bookRow = document.createElement("div");
    bookRow.className = "bookRow";

    for (let i = 0; i < this.myLibrary.length; i++) {
      if (i == 0 || i % 5 == 0) {
        bookRow = document.createElement("div");
        bookRow.className = "bookRow";
      }

      const book = this.myLibrary[i];
      const bookCard = new BookCard(
        book.title,
        book.author,
        book.pages,
        book.read
      );

      const deleteButton = document.createElement("button");
      deleteButton.className = "deleteButton";

      bookCard.buttonContainer.appendChild(deleteButton);

      this.addBookCard(bookRow, bookCard);
      this.cardGrid.appendChild(bookRow);
    }
  }

  addBookCard(container, bookCard) {
    container.appendChild(bookCard.card);
  }
}
