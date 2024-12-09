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
        book.read,
        book.id
      );

      if (book.read) {
        bookCard.readBtn.classList.add("read");
        bookCard.readBtn.textContent = "Read";
      }

      bookCard.deleteBtn.addEventListener("click", () => {
        bookCard.card.classList.add("delete");

        setTimeout(() => {
          this.myLibrary = this.myLibrary.filter(
            (book) => book.id.toString() !== bookCard.deleteBtn.id
          );

          this.printBooks();
        }, 500);
      });

      bookCard.readBtn.addEventListener("click", () => {
        if (bookCard.readBtn.classList.contains("read")) {
          bookCard.readBtn.classList.remove("read");
          bookCard.readBtn.textContent = "Not read";
        } else {
          bookCard.readBtn.classList.add("read");
          bookCard.readBtn.textContent = "Read";
        }
      });

      this.addBookCard(bookRow, bookCard);
      this.cardGrid.appendChild(bookRow);
    }
  }

  addBookCard(container, bookCard) {
    container.appendChild(bookCard.card);
  }
}
