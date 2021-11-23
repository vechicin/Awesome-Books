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
      let book = bookList[i];
      book.innerHTML = `<div class='book'><p>${book.title}</p><br><p>${book.author}</p><br><button class='btn'>Remove</button>`;
      return book;
  }
};

let listOfBooks = function() {
  booksSection.appendChild(displayBooks);
};
