// ELEMENTS
// let bookList = [];
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

class Shelve {
  constructor(){
    bookList = [];
  }

  listOfBooks(title, author, id) {
    const li = document.createElement('li');
    li.innerHTML = `${title} by ${author} <button id="${id}">Remove</button>`;
    listedBook.appendChild(li);
  };
  
  addBook(title, author) {
    const book = new Book(title, author)
    this.bookList.push(book)
    localStorage.setItem('BookList', JSON.stringify(this.bookList));
  } 

  removeBook(id) {
    const index = bookList.findIndex((book) => book.id === id);
    bookList.splice(index, 1);
    localStorage.setItem('BookList', JSON.stringify(bookList));
  }

  loadList() {
    if (!localStorage.getItem('BookList')) {
      this.bookList = [];
      localStorage.setItem('BookList', JSON.stringify(this.bookList));
      } else {
      this.bookList = JSON.parse(localStorage.getItem('BookList'));
     }
    };

   loadPage() {
      this.loadList();
      this.bookList.forEach((element) => {
        listedBook.insertAdjacentHTML('beforeend', `<li>${element.title} by ${element.author} <button id="${element.id}">Remove</button></li>`);
      });
    };
}

const bookList = new Shelve()
console.log(bookList.bookList)



// FUNCTIONS
// const listOfBooks = function (title, author, id) {
//   const li = document.createElement('li');
//   li.innerHTML = `${title} by ${author} <button id="${id}">Remove</button>`;
//   listedBook.appendChild(li);
// };

// function addBook(title, author) {
//   const book = {
//     id: 0,
//     title: '',
//     author: '',
//   };
//   if (title === '' || author === '') {
//     return;
//   }
//   book.id = new Date().getTime();
//   book.title = title;
//   book.author = author;
//   bookList.push(book);
//   listOfBooks(book.title, book.author, book.id);
//   localStorage.setItem('BookList', JSON.stringify(bookList));
// }

// function removeBook(id) {
//   const index = bookList.findIndex((book) => book.id === id);
//   bookList.splice(index, 1);
//   localStorage.setItem('BookList', JSON.stringify(bookList));
// }

// const loadList = function () {
//   if (!localStorage.getItem('BookList')) {
//     bookList = [];
//     localStorage.setItem('BookList', JSON.stringify(bookList));
//   } else {
//     bookList = JSON.parse(localStorage.getItem('BookList'));
//   }
// };

// const loadPage = function () {
//   loadList();
//   bookList.forEach((element) => {
//     listedBook.insertAdjacentHTML('beforeend', `<li>${element.title} by ${element.author} <button id="${element.id}">Remove</button></li>`);
//   });
// };

// EVENT LISTENERS
addButton.addEventListener('click', () => {
  const bookTitle = document.getElementById('title').value;
  const bookAuthor = document.getElementById('author').value;
  addBook(bookTitle, bookAuthor);
});

booksSection.addEventListener('click', (e) => {
  removeBook(e.target.id);
  const element = document.getElementById(e.target.id);
  element.parentElement.remove();
});

loadPage();
