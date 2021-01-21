

let myLibrary = [];
let theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'unread');
let bookA = new Book('bookA', 'authorA', 100, 'read');
let bookB = new Book('bookB', 'authorB', 100, 'read');
let bookC = new Book('bookC', 'authorC', 100, 'unread');
let bookD = new Book('bookD', 'authorD', 100, 'unread');

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    if (read === 'yes') this.read = 'read';
    else this.read = 'unread';

    this.info = function () {
        return title + ' by ' + author + ', ' + pages + ' pages, ' + read;
    }
}

function addBookToLibrary() {
    const title = prompt('Book title');
    const author = prompt('Author');
    const pages = prompt('Pages');
    let read;
    while (read !== 'yes' && read !== 'no') {
        read = prompt('Have you read this? (yes/no)')
    }
    const book = new Book(title, author, pages, read);
    
    myLibrary.push(book);

    console.table(myLibrary);
}

const button = document.querySelector('.button');
button.addEventListener('mousedown', addBookToLibrary);

//addBookToLibrary();



// theHobbit.info() // "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"