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
    this.cardGrid.innerHTML = "";
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
      deleteButton.classList.add("deleteBtn");
      deleteButton.id = book.id;
      deleteButton.classList.add("fa-solid", "fa-trash");

      const readButton = document.createElement("button");
      readButton.classList.add("readBtn");
      readButton.classList.add("fa-brands", "fa-readme");

      if (book.read) {
        readButton.classList.add("read");
      }

      deleteButton.addEventListener("click", () => {
        console.log("DELETE" + deleteButton.id);

        this.myLibrary = this.myLibrary.filter(
          (book) => book.id.toString() !== deleteButton.id
        );

        this.printBooks();
      });

      readButton.addEventListener("click", () => {
        if (readButton.classList.contains("read")) {
          readButton.classList.remove("read");
        } else {
          readButton.classList.add("read");
        }
      });

      bookCard.buttonContainer.appendChild(deleteButton);
      bookCard.buttonContainer.appendChild(readButton);

      this.addBookCard(bookRow, bookCard);
      this.cardGrid.appendChild(bookRow);
    }
  }

  addBookCard(container, bookCard) {
    container.appendChild(bookCard.card);
  }
}
