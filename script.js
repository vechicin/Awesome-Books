/* eslint-disable max-classes-per-file */
/* eslint-disable no-undef */
// ELEMENTS
const { DateTime } = luxon;
const booksSection = document.getElementById('list');
const addButton = document.querySelector('.add-book');
const listedBook = document.querySelector('.book-list');
const clock = document.getElementById('clock');

// ELEMENTS FOR HIDING NAVBAR

const navMenu = document.querySelector('.links');

const list = document.getElementById('list');
const add = document.getElementById('add');
const contact = document.getElementById('contact');

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
    for (let i = 0; i < this.bookList.length; i += 1) {
      if (this.bookList.indexOf(this.bookList[i]) % 2 !== 0) {
        listedBook.insertAdjacentHTML('beforeend', `<li class="odd-book">${this.bookList[i].title} by ${this.bookList[i].author} <button id="${this.bookList[i].id}" class="remove-button">Remove</button></li>`);
      } else {
        listedBook.insertAdjacentHTML('beforeend', `<li class="even-book">${this.bookList[i].title} by ${this.bookList[i].author} <button id="${this.bookList[i].id}" class="remove-button">Remove</button></li>`);
      }
    }
  }
}

// FUNCTIONS FOR DISPLAYING AND HIDING
function show(section) {
  section.style.display = 'flex';
  section.style.flexDirection = 'column';
}

function hide(section) {
  section.style.display = 'none';
}

function initialPage() {
  hide(list);
  show(add);
  hide(contact);
}

function setTime() {
  clock.innerHTML = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
}

// EVENT LISTENERS
const shelf = new Shelf();
shelf.checkLs();
shelf.loadPage();
initialPage();

addButton.addEventListener('click', () => {
  const bookTitle = document.getElementById('title').value;
  const bookAuthor = document.getElementById('author').value;
  const book = new Book(bookTitle, bookAuthor);
  const errorMessage = document.querySelector('.warning');
  if (bookTitle === '' || bookAuthor === '') {
    add.insertAdjacentHTML('beforeend', '<p class="warning">Please fill out all the fields!</p>');
  } else if (errorMessage) {
    errorMessage.remove();
    shelf.addBook(book);
    listedBook.insertAdjacentHTML('beforeend', `<li class=new-book>${book.title} by ${book.author} <button id="${book.id}"class="remove-button">Remove</button></li>`);
    show(list);
    add.reset();
  } else {
    shelf.addBook(book);
    listedBook.insertAdjacentHTML('beforeend', `<li class=new-book>${book.title} by ${book.author} <button id="${book.id}"class="remove-button">Remove</button></li>`);
    show(list);
    add.reset();
  }
});

booksSection.addEventListener('click', (e) => {
  shelf.removeBook(e.target.id);
  const element = document.getElementById(e.target.id);
  element.parentElement.remove();
});

// SHOW AND HIDE SECTIONS IN THE PAGE
navMenu.addEventListener('click', (e) => {
  if (e.target.id === 'nav-list') {
    show(list);
    hide(add);
    hide(contact);
  } else if (e.target.id === 'nav-add') {
    hide(list);
    show(add);
    hide(contact);
  } else {
    hide(list);
    hide(add);
    show(contact);
  }
});

setTime();
