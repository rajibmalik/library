import { Book } from "./Book.js";
import { Library } from "./Library.js";
import { Form } from "./Form.js";

const addBookBtn = document.getElementById("addBookBtn");
const formContainer = document.getElementById("formContainer");

const library = new Library();
const hobbit = new Book("The Hobbit", "J.R.R Tolkien", 295, "No");
library.addBookToLibrary(hobbit);

const form = new Form(formContainer, library);

addBookBtn.addEventListener("click", form.createForm.bind(form));
