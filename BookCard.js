export class BookCard {
  constructor(title, author, pages, read) {
    this.card = document.createElement("div");
    this.card.className = "bookCard";

    this.title = document.createElement("p");
    this.title.textContent = `Title: ${title}`;
    this.title.className = "cardInfo";

    this.author = document.createElement("p");
    this.author.textContent = `Author: ${author}`;
    this.author.className = "cardInfo";

    this.pages = document.createElement("p");
    this.pages.textContent = `Pages: ${pages}`;
    this.pages.className = "cardInfo";

    this.buttonContainer = document.createElement("div");
    this.buttonContainer.className = "bookCardButtonContainer";

    this.card.appendChild(this.title);
    this.card.appendChild(this.author);
    this.card.appendChild(this.pages);
    this.card.appendChild(this.buttonContainer);
  }

  addCard(container) {
    container.appendChild(this.card);
  }
}
