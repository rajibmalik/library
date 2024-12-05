export class Book {
  static id = 1;
  constructor(title, author, pages, read) {
    this.id = Book.id++;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  toString() {
    let hasRead = this.read ? "has read" : "not read yet";

    return `${this.title} by ${this.author}, ${this.pages} pages, ${hasRead}`;
  }
}
