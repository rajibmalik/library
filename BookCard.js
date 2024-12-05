export class BookCard {
  constructor(title, author, pages, read) {
    this.card = document.createElement("div");
    this.card.className = "bookCard";

    this.title = document.createElement("p");
    this.title.textContent = `Title: ${title}`;
    this.title.id = "cardInfo";

    this.author = document.createElement("p");
    this.author.textContent = `Author: ${author}`;
    this.author.id = "cardInfo";

    this.pages = document.createElement("p");
    this.pages.textContent = `Pages: ${pages}`;
    this.pages.id = "cardInfo";

    this.read = document.createElement("p");
    this.read.textContent = read;
    this.read.id = "cardInfo";

    this.card.appendChild(this.title);
    this.card.appendChild(this.author);
    this.card.appendChild(this.pages);
    this.card.appendChild(this.read);
  }

  addCard(container) {
    container.appendChild(this.card);
  }
}
