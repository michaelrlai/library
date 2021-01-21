

let myLibrary = [];

let bookA = new Book('bookA', 'authorA', 100, 'yes');
myLibrary.push(bookA);
let bookB = new Book('bookB', 'authorB', 100, 'yes');
myLibrary.push(bookB);
let bookC = new Book('bookC', 'authorC', 100, 'no');
myLibrary.push(bookC);
let bookD = new Book('bookD', 'authorD', 100, 'yes');
myLibrary.push(bookD);
let bookE = new Book('bookE', 'authorE', 100, 'yes');
myLibrary.push(bookE);
let bookF = new Book('bookF', 'authorF', 100, 'no');
myLibrary.push(bookF);


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function () {
        return title + ' by ' + author + ', ' + pages + ' pages, ' + read;
    }

    this.index = 'card' + myLibrary.length;
}

function addBookToLibrary() {
    const title = prompt('Book title');
    const author = prompt('Author');
    const pages = prompt('Pages');
    let read;
    while (read !== 'yes' && read !== 'no') {
        read = prompt('Have you read this? (yes/no)')
    }
    const newBook = new Book(title, author, pages, read);
    
    myLibrary.push(newBook);

    console.table(myLibrary);

    start();
}

function drawBooks(myLibrary) {

    document.querySelector('.books-container').innerHTML = '';
    let book;

    for (let i = 0; i < myLibrary.length; i++) {

        book = document.createElement('div');
        book.innerHTML = 
            `<div class='book-card'>
                <div class='card-info'>Title: ${myLibrary[i].title}</div>
                <div class='card-info'>Author: ${myLibrary[i].author} </div>
                <div class='card-info'>Pages: ${myLibrary[i].pages} </div>
                <div class='card-info'>Author: ${myLibrary[i].author} </div>
                <div class='card-info'>Have you read this book? ${myLibrary[i].read} </div>
                <div class='read-delete-button-container'>
                    <div class='button card-button read-button ${myLibrary[i].index}'>READ</div>
                    <div class='button card-button delete-button ${myLibrary[i].index}'>DELETE</div>
                </div>
            </div>`;

        document.querySelector('.books-container').prepend(book); 

    }
}

function deleteBook() {
    let i = Number(this.className.slice(37));
    myLibrary.splice(i, 1);
    start();
    console.table(myLibrary);
}

function readBook() {
    let i = Number(this.className.slice(35));
    if (myLibrary[i].read === 'yes') {
        myLibrary[i].read = 'no';
    } else {
        myLibrary[i].read = 'yes';
    }

    start();
    console.table(myLibrary); 
}

function start() {
    drawBooks(myLibrary);

    const newBookButton = document.querySelector('.new-book-button');
    newBookButton.addEventListener('mousedown', addBookToLibrary);

    const deleteButton = document.querySelectorAll('.delete-button');
    for (let i = 0; i < deleteButton.length; i++) {
        deleteButton[i].addEventListener('mousedown', deleteBook);
    }

    const readButton = document.querySelectorAll('.read-button');
    for (let i = 0; i < readButton.length; i++) {
        readButton[i].addEventListener('mousedown', readBook);
    }

}

start();

console.table(myLibrary);