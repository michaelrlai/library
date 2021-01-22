

let myLibrary = [];

let bookA = new Book('Z', 'authorA', 100, 'yes');
myLibrary.push(bookA);
let bookB = new Book('Y', 'authorB', 100, 'yes');
myLibrary.push(bookB);
let bookC = new Book('X', 'authorC', 100, 'no');
myLibrary.push(bookC);
let bookD = new Book('W', 'authorD', 100, 'yes');
myLibrary.push(bookD);
let bookE = new Book('bookE', 'authorE', 100, 'yes');
myLibrary.push(bookE);
let bookF = new Book('bookF', 'authorF', 100, 'no');
myLibrary.push(bookF);
let bookG = new Book('bookG', 'authorA', 100, 'yes');
myLibrary.push(bookG);
let bookH = new Book('bookH', 'authorB', 100, 'yes');
myLibrary.push(bookH);
let bookI = new Book('bookI', 'authorC', 100, 'no');
myLibrary.push(bookI);
let bookJ = new Book('bookJ', 'authorD', 100, 'yes');
myLibrary.push(bookJ);
let bookK = new Book('bookK', 'authorE', 100, 'yes');
myLibrary.push(bookK);
let bookL = new Book('bookL', 'authorF', 100, 'no');
myLibrary.push(bookL);
let bookM = new Book('bookM', 'authorA', 100, 'yes');
myLibrary.push(bookM);
let bookN = new Book('bookN', 'authorB', 100, 'yes');
myLibrary.push(bookN);
let bookO = new Book('bookO', 'authorC', 100, 'no');
myLibrary.push(bookO);
let bookP = new Book('bookP', 'authorD', 100, 'yes');
myLibrary.push(bookP);
let bookQ = new Book('bookQ', 'authorE', 100, 'yes');
myLibrary.push(bookQ);
let bookR = new Book('bookR', 'authorF', 100, 'no');
myLibrary.push(bookR);
let bookS = new Book('bookS', 'authorA', 100, 'yes');
myLibrary.push(bookS);
let bookT = new Book('bookT', 'authorB', 100, 'yes');
myLibrary.push(bookT);
let bookU = new Book('bookU', 'authorC', 100, 'no');
myLibrary.push(bookU);
let bookV = new Book('A', 'authorD', 100, 'yes');
myLibrary.push(bookV);
let bookW = new Book('B', 'authorE', 100, 'yes');
myLibrary.push(bookW);
let bookX = new Book('C', 'authorF', 100, 'no');
myLibrary.push(bookX);


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function () {
        return title + ' by ' + author + ', ' + pages + ' pages, ' + read;
    }

    this.index = title;
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

    
    document.querySelector('.info-container').innerHTML = '';
    let info;
    
    info = document.createElement('div');
    info.innerHTML = 
        `<div class='info-card'>
            <div class='card-info'>Store your book collection and keep track of the books you still have yet to read in this app.</div>
            <br>
            <div class='card-info'>Total books: ${myLibrary.length}</div>
            <div class='card-info'>Unread books: </div>
            <div class='new-book-button-container'>
                <div class='button card-button new-book-button'>NEW BOOK</div>
            </div>
        </div>`;

        document.querySelector('.info-container').appendChild(info); 





    document.querySelector('.cards-container').innerHTML = '';
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

        document.querySelector('.cards-container').appendChild(book); 

    }
}

function deleteBook() {
    let i = this.className.slice(33);
    console.log(i);
    for (let j = 0; j < myLibrary.length; j++) {
        if (myLibrary[j].index === i) {
            myLibrary.splice(j, 1);
        }
    }

    start();
    console.table(myLibrary);
}

function readBook() {
    let i = this.className.slice(31);
    console.log(i);
    for (let j = 0; j < myLibrary.length; j++) {
        if (myLibrary[j].index === i) {
            if (myLibrary[j].read === 'yes') myLibrary[j].read = 'no';
            else myLibrary[j].read = 'yes';
        }
    }
    start();
    console.table(myLibrary); 
}

function start() {

    myLibrary.sort(function(a, b) {
        if (a.title < b.title) {
            return -1;
        } else {
            return 1;
        }
    });

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