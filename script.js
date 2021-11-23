// ELEMENTS
let bookList = [];
let booksSection = document.querySelector('.books');
let addButton = document.querySelector('.add-book');
let removeButton = document.querySelectorAll('.remove-button');

// FUNCTIONS
function addBook(title, author) {
  let book = {
    id : 0,
    title: '',
    author: ''
  };
  book.id = new Date().getTime();
  book.title = title;
  book.author = author;
  bookList.push(book);
};

function removeBook(id) {
  let index = bookList.findIndex(book => book.id === id);
  bookList.splice(index, 1);
};

const createElementWithClass = (type, className) => {
  const element = document.createElement(type);
  element.classList.add(className);
  return element;
};

let listOfBooks = function () {
  let bookDiv = createElementWithClass('div', 'book');
  let bookTitleAndAuthor = createElementWithClass('p', 'book-info');
  for (let i = 0; i <= bookList.length; i++) {
    bookList[i];
    bookTitleAndAuthor.innerHTML = `${bookList[i].title} by ${bookList[i].author} <button id="${bookList[i].id}" class="remove-button">Remove</button>`;
    bookDiv.appendChild(bookTitleAndAuthor);
    booksSection.appendChild(bookDiv);
  }
};

// EVENT LISTENERS
addButton.addEventListener('click', () => {
  let bookTitle = document.getElementById('title').value;
  let bookAuthor = document.getElementById('author').value;
  addBook(bookTitle, bookAuthor);
  listOfBooks();
});

removeButton.addEventListener('click', () => {
  console.log(this.id);
});

console.log(bookList);
