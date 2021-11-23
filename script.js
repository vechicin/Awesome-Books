// ELEMENTS
let bookList = [];

let book = {
  title : '',
  author : ''
}

let addButton = document.querySelector('.add-book');
let removeButton = document.querySelectorAll('.remove');
// FUNCTIONS
function addBook(title, author) {
    book.title = title;
    book.author = author;
    bookList.push(book);
    return bookList;
}

function removeBook(title) {
  let index = bookList.findIndex(book => book.title === title);
  bookList.splice(index, 1);
  return bookList;
}

