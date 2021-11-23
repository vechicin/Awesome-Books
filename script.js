// ELEMENTS
let bookList = [];

let book = {
  title : '',
  author : ''
};

let booksSection = document.querySelector('.books');
let addButton = document.querySelector('.add-book');
let removeButton = document.querySelectorAll('.remove');
// FUNCTIONS
function addBook(title, author) {
  book.title = title;
  book.author = author;
  bookList.push(book);
  return bookList;
};

function removeBook(title) {
  let index = bookList.findIndex(book => book.title === title);
  bookList.splice(index, 1);
  return bookList;
};

function displayBooks(bookList) {
  for (let i = 0; i <= bookList.length; i++) {
    return bookList[i];
  }
};

const createElementWithClass = (type, className) => {
  const element = document.createElement(type);
  element.classList.add(className);
  return element;
};

let listOfBooks = function() {
  let book = createElementWithClass('div', 'book');
  let bookTitle = createElementWithClass('p', 'book-author');
  let bookAuthor = createElementWithClass('p', 'book-author');
  bookTitle.innerHTML = book.title;
  bookAuthor.innerHTML = book.author;
  book.appendChild(bookTitle);
  book.appendChild(bookAuthor);
  booksSection.appendChild(book);
};
