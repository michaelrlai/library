
class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.index = title;
    }
}


function addBookToLibrary() {

    document.body.style.overflow = 'scroll';

    const title = document.querySelector('.title').value;
    const author = document.querySelector('.author').value;    
    const pages = document.querySelector('.pages').value;
    const read = document.querySelector('.read').value;

    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);

    document.querySelector('.title').value = '';
    document.querySelector('.author').value = '';
    document.querySelector('.pages').value = '';
    document.querySelector('.read').value = '';

    start();
    console.table(myLibrary);

}

function drawBooks(myLibrary) {

    const readUnread = myLibrary.reduce(function(total, book) {
        total[book.read]++;
        return total;
    }, {
        yes: 0,
        no: 0
    });

    const unread = readUnread.no;

    console.log(unread);    

    document.querySelector('.info-container').innerHTML = '';
    
    let info = document.createElement('div');
    info.innerHTML = 
        `<div class='info-card'>
            <div class='info-card-info-container'>
                <div class='card-info'>A list of all your books</div><br>
                <div class='card-info'>Total books: ${myLibrary.length}</div>
                <div class='card-info'>Unread books: ${unread}</div>
                <div class='new-book-button-container'>
                    <a href='#modal' class='button card-button new-book-button'>ADD BOOK</a>
                </div>
            </div>
        </div>`;

    document.querySelector('.info-container').appendChild(info); 


    document.querySelector('.cards-container').innerHTML = '';
    let book;

    for (let i = 0; i < myLibrary.length; i++) {

        book = document.createElement('div');
        book.innerHTML = 
            `<div class='book-card'>
                <div class='card-info-container'>
                    <div class='card-info'>${myLibrary[i].title}</div>
                    <div class='card-info'>by ${myLibrary[i].author} </div>
                    <div class='card-info'>${myLibrary[i].pages} pages</div>
                    <div class='card-info'>Have you read this book? ${myLibrary[i].read} </div>
                    <div class='read-delete-button-container'>
                        <div class='button card-button read-button ${myLibrary[i].index}'>READ</div>
                        <div class='button card-button delete-button ${myLibrary[i].index}'>DELETE</div>
                    </div>
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

function saveLibary() {
    localStorage.setItem('savedLibrary', JSON.stringify(myLibrary));
}

function start() {
    saveLibary();

    myLibrary.sort(function(a, b) {
        if (a.title < b.title) {
            return -1;
        } else {
            return 1;
        }
    });

    drawBooks(myLibrary);

    const newBookButton = document.querySelector('.new-book-button');
    newBookButton.addEventListener('mousedown', function () {
        document.body.style.overflow = 'hidden';
    });

    const submit = document.querySelector('.submit-button');
    submit.addEventListener('mousedown', function() {
        if (document.querySelector('.title').value !== ''
                && document.querySelector('.author').value !== ''
                && document.querySelector('.pages').value !== ''
                && document.querySelector('.read').value !== '') {
            addBookToLibrary();
        } else document.body.style.overflow = 'scroll';
    });
    

    const closeModal = document.querySelector('.modal_close');
    closeModal.addEventListener('mousedown', function() {
        document.body.style.overflow = 'scroll';
        document.querySelector('.title').value = '';
        document.querySelector('.author').value = '';
        document.querySelector('.pages').value = '';
        document.querySelector('.read').value = '';
    });

    const deleteButton = document.querySelectorAll('.delete-button');
    for (let i = 0; i < deleteButton.length; i++) {
        deleteButton[i].addEventListener('mousedown', deleteBook);
    }

    const readButton = document.querySelectorAll('.read-button');
    for (let i = 0; i < readButton.length; i++) {
        readButton[i].addEventListener('mousedown', readBook);
    }

}


//let bookA = new Book('The Hill We Climb: Poems', 'Amanda Gorman', 80, 'yes');
//myLibrary.push(bookA);
/*
let bookB = new Book('1984', 'George Orwell', 328, 'yes');
myLibrary.push(bookB);
let bookC = new Book('We Were Liars', 'E. Lockhart', 100, 'no');
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
let bookV = new Book('A BOOK OF BOOKS', 'authorD', 100, 'yes');
myLibrary.push(bookV);
let bookW = new Book('BOATS AND CARS', 'authorE', 100, 'yes');
myLibrary.push(bookW);
let bookX = new Book('CATS PLEASE', 'authorF', 100, 'no');
myLibrary.push(bookX); */



myLibrary = JSON.parse(localStorage.getItem('savedLibrary'));
if (myLibrary === null) {
    myLibrary = [];
}


start();

