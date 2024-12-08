import { Book } from "./Book.js";
import { Library } from "./Library.js";

const dialog = document.querySelector("dialog");
const showButton = document.getElementById("modalBtn");
const closeButton = document.getElementById("closeBtn");
const readButtons = document.getElementsByClassName("readBtn");
const dialogForm = document.getElementById("dialogForm");

const library = new Library();
const hobbit = new Book("The Hobbit", "J.R.R Tolkien", 295, true);
const journey = new Book("journey ", "john", 278, false);
library.addBookToLibrary(hobbit);
library.addBookToLibrary(hobbit);
library.addBookToLibrary(hobbit);
library.addBookToLibrary(hobbit);
library.addBookToLibrary(hobbit);

library.addBookToLibrary(hobbit);
library.addBookToLibrary(hobbit);
library.addBookToLibrary(hobbit);
library.addBookToLibrary(hobbit);

showButton.addEventListener("click", () => {
  dialog.showModal();
  dialog.classList.add("open");
});

closeButton.addEventListener("click", () => {
  dialog.close();
  dialog.classList.remove("open");
  setTimeout(() => dialog.close(), 500);
});

dialogForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.getElementById("titleInput");
  const author = document.getElementById("authorInput");
  const pages = document.getElementById("pagesInput");
  const read = document.getElementById("readInput");

  if (!title.value || !author.value || !pages.value || !read.value) {
    dialog.close();
    return;
  }

  const book = new Book(title.value, author.value, pages.value, read.checked);
  library.addBookToLibrary(book);

  title.value = "";
  author.value = "";
  pages.value = "";
  read.checked = false;
  dialog.close();
});
