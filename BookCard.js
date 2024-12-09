export class BookCard {
  constructor(title, author, pages, read, id) {
    this.id = id;
    this.card = document.createElement("div");
    this.card.className = "bookCard";

    this.body = document.createElement("div");
    this.body.classList.add("bookCardBodyContainer");

    this.title = document.createElement("p");
    this.title.textContent = `${title}`;
    this.title.className = "cardInfo";

    this.author = document.createElement("p");
    this.author.textContent = `${author}`;
    this.author.className = "cardInfo";

    this.pages = document.createElement("p");
    this.pages.textContent = `${pages} pages`;
    this.pages.className = "cardInfo";

    this.deleteContainer = document.createElement("div");
    this.deleteContainer.className = "bookCardDeleteContainer";

    this.buttonContainer = document.createElement("div");
    this.buttonContainer.className = "bookCardButtonContainer";

    this.deleteBtn = this.createDeleteBtn();
    this.readBtn = this.createReadBtn();

    this.buttonContainer.appendChild(this.readBtn);

    this.deleteContainer.appendChild(this.deleteBtn);
    this.card.appendChild(this.deleteContainer);

    this.body.appendChild(this.title);
    this.body.appendChild(this.author);
    this.body.appendChild(this.pages);

    this.card.appendChild(this.body);

    this.card.appendChild(this.buttonContainer);
  }

  createBody() {}

  createDeleteBtn() {
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("deleteBtn");
    deleteBtn.id = this.id;
    deleteBtn.classList.add("fa-solid", "fa-x");

    return deleteBtn;
  }

  createReadBtn() {
    const readButton = document.createElement("button");
    readButton.classList.add("readBtn");
    readButton.textContent = "Not read";

    return readButton;
  }

  addCard(container) {
    container.appendChild(this.card);
  }
}
