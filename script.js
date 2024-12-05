import { Book } from "./Book.js";
import { Library } from "./Library.js";
// import { Form } from "./Form.js";

const dialog = document.querySelector("dialog");
const showButton = document.getElementById("modalBtn");
const closeButton = document.getElementById("closeBtn");
const dialogForm = document.getElementById("dialogForm");

const addBookBtn = document.getElementById("addBookBtn");
const formContainer = document.getElementById("formContainer");

const library = new Library();
const hobbit = new Book("The Hobbit", "J.R.R Tolkien", 295, "No");
library.addBookToLibrary(hobbit);

showButton.addEventListener("click", () => {
  dialog.showModal();
});

closeButton.addEventListener("click", () => {
  dialog.close();
});

dialogForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.getElementById("titleInput");
  const author = document.getElementById("authorInput");
  const pages = document.getElementById("pagesInput");
  const read = document.getElementById("readInput");

  const book = new Book(title.value, author.value, pages.value, read.checked);
  library.addBookToLibrary(book);
  formContainer.innerHTML = `<p>Submitted successfully! Title: ${book.title} ${book.author} ${book.pages} ${book.read}</p>`;

  dialog.close();
  title.value = "";
  author.value = "";
  pages.value = "";
  read.checked = false;
});
