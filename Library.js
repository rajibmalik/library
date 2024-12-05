const tableBody = document.getElementById("bookTableBody");
const tableFooter = document.getElementById("bookTableFooter");

export class Library {
  constructor() {
    this.myLibrary = [];
  }

  addBookToLibrary(book) {
    this.myLibrary.push(book);
    tableBody.innerHTML = "";
    this.printBooks();
  }

  printBooks() {
    for (let i = 0; i < this.myLibrary.length; i++) {
      const row = document.createElement("tr");
      row.id = this.myLibrary[i];
      const title = document.createElement("th");
      const author = document.createElement("td");
      const pages = document.createElement("td");
      const read = document.createElement("td");

      title.scope = "col";
      author.textContent = this.myLibrary[i].author;
      pages.textContent = this.myLibrary[i].pages;
      title.textContent = this.myLibrary[i].title;
      read.textContent = this.myLibrary[i].read;

      row.append(title);
      row.append(author);
      row.append(pages);
      row.append(read);

      tableBody.append(row);
    }

    const row = document.createElement("tr");

    const header = document.createElement("th");
    tableFooter.innerHTML = "";
    header.textContent = `Total number of books: ${this.myLibrary.length} `;
    header.setAttribute("colspan", "4");

    row.append(header);

    tableFooter.append(row);
  }
}
