// ELEMENTS
let bookList = [];
let booksSection = document.querySelector('.books');
let addButton = document.querySelector('.add-book');
let removeButton = document.querySelectorAll('.btn-remove');

// FUNCTIONS
function addBook(title, author) {
  let book = {
    title: '',
    author: ''
  };

  book.title = title;
  book.author = author;
  bookList.push(book);
};

function removeBook(title) {
  let index = bookList.findIndex(book => book.title === title);
  bookList.splice(index, 1);
};

const createElementWithClass = (type, className) => {
  const element = document.createElement(type);
  element.classList.add(className);
  return element;
};

let listOfBooks = function () {
  let bookDiv = createElementWithClass('div', 'book');
  let bookTitle = createElementWithClass('p', 'book-info');
  let bookAuthor = createElementWithClass('p', 'book-info');
  for (let i = 0; i <= bookList.length; i++) {
    return bookList[i]; 
  }
  bookTitle.innerHTML = book.title;
  bookAuthor.innerHTML = book.author;
  bookDiv.appendChild(bookTitle);
  bookDiv.appendChild(bookAuthor);
  booksSection.appendChild(bookDiv);
  return booksSection;
};

// EVENT LISTENERS
addButton.addEventListener('click', () => {
  let bookTitle = document.getElementById('title').value;
  let bookAuthor = document.getElementById('author').value;
  addBook(bookTitle, bookAuthor);
  listOfBooks;
});

addBook('The Bible', 'Moses');
addBook('Lord of the Rings', 'J.R.R Tolkien');
console.log(listOfBooks);
console.log(bookList);