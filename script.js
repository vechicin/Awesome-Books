/* eslint-disable max-classes-per-file */
// ELEMENTS
const booksSection = document.querySelector('.books');
const addButton = document.querySelector('.add-book');
const listedBook = document.querySelector('.book-list');

// CLASSES
class Book {
  constructor(title, author) {
    this.id = new Date().getTime();
    this.title = title;
    this.author = author;
  }
}

class Shelf {
  constructor() {
    this.bookList = [];
  }

  addBook(object) {
    this.bookList.push(object);
    localStorage.setItem('BookList', JSON.stringify(this.bookList));
  }

  removeBook(id) {
    const index = this.bookList.findIndex((book) => book.id.toString() === id);
    this.bookList.splice(index, 1);
    localStorage.setItem('BookList', JSON.stringify(this.bookList));
  }

  checkLs() {
    if (!localStorage.getItem('BookList')) {
      this.bookList = [];
      localStorage.setItem('BookList', JSON.stringify(this.bookList));
    } else {
      this.bookList = JSON.parse(localStorage.getItem('BookList'));
    }
  }

  loadPage() {
    this.checkLs();
    this.bookList.forEach((element) => {
      listedBook.insertAdjacentHTML('beforeend', `<li>${element.title} by ${element.author} <button id="${element.id}">Remove</button></li>`);
    });
  }
}

// EVENT LISTENERS
const shelf = new Shelf();
shelf.checkLs();

addButton.addEventListener('click', () => {
  const bookTitle = document.getElementById('title').value;
  const bookAuthor = document.getElementById('author').value;
  const book = new Book(bookTitle, bookAuthor);
  shelf.addBook(book);
  listedBook.insertAdjacentHTML('beforeend', `<li>${book.title} by ${book.author} <button class="remove-button">Remove</button></li>`);
});

booksSection.addEventListener('click', (e) => {
  shelf.removeBook(e.target.id);
  const element = document.getElementById(e.target.id);
  element.parentElement.remove();
});

shelf.loadPage();
