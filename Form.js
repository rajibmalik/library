import { Book } from "./Book.js";
import { Library } from "./Library.js";

export class Form {
  constructor(formContainer, library) {
    if (!formContainer) {
      console.error("formContainer element is not defined!");
      return;
    }
    this.formContainer = formContainer;
    this.library = library;
  }

  createForm() {
    const form = document.createElement("form");

    const titleLabel = document.createElement("label");
    titleLabel.textContent = "Title: ";
    titleLabel.setAttribute("for", "title");
    const titleInput = document.createElement("input");
    titleInput.type = "text";
    titleInput.id = "title";
    titleInput.placeholder = "Lord of the Rings";
    titleInput.name = "title";

    const authorLabel = document.createElement("label");
    authorLabel.textContent = "Author: ";
    authorLabel.setAttribute("for", "author");
    const authorInput = document.createElement("input");
    authorInput.type = "text";
    authorInput.id = "author";
    authorInput.placeholder = "J.K Rowling";
    authorInput.name = "author";

    const pagesLabel = document.createElement("label");
    pagesLabel.textContent = "Pages: ";
    pagesLabel.setAttribute("for", "pages");
    const pagesInput = document.createElement("input");
    pagesInput.type = "number";
    pagesInput.id = "pages";
    pagesInput.placeholder = "200";
    pagesInput.name = "pages";

    const readLabel = document.createElement("label");
    readLabel.textContent = "Has read: ";
    readLabel.setAttribute("for", "read");
    const readInput = document.createElement("input");
    readInput.type = "text";
    readInput.id = "read";
    readInput.placeholder = "Has read";
    readInput.name = "read";

    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.textContent = "Submit";

    form.appendChild(titleLabel);
    form.appendChild(titleInput);
    form.appendChild(authorLabel);
    form.appendChild(authorInput);
    form.appendChild(pagesLabel);
    form.appendChild(pagesInput);
    form.appendChild(readLabel);
    form.appendChild(readInput);
    form.appendChild(submitButton);

    this.formContainer.innerHTML = "";
    this.formContainer.appendChild(form);

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const title = titleInput.value;
      const author = authorInput.value;
      const pages = pagesInput.value;
      const hasRead = readInput.value;

      const book = new Book(title, author, pages, hasRead);
      this.library.addBookToLibrary(book);

      this.formContainer.innerHTML = `<p>Submitted successfully! Title: ${title} ${author} ${pages} ${hasRead}</p>`;
    });
  }
}
