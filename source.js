const myLibrary = [];

class Book {
    constructor(author, title, number, read, comments) {
        this.author = author;
        this.title = title;
        this.number = number;
        this.read = read;
        this.comments = comments;
    }
    addToMyLibrary() {
        let book = [this.author, this.title, this.number, this.read, this.comments];
        let len = book.length;
        myLibrary.push(book);
        return {book, len};
    }
    addToPage() {
        const card = document.createElement('div');
        card.style.background = 'white';
        card.style.height = '100px';
        card.style.width = '200px';
        card.style.margin = '8px';
        card.style.overflow = 'auto';
        for(let i = 0; i < this.addToMyLibrary().len; i++){
            const cardContent = document.createElement('p');
            card.appendChild(cardContent);
            cardContent.textContent = `${this.addToMyLibrary().book[i]}`;
        }
        let left = document.querySelector('.left');
        left.appendChild(card);
    }
}

function addBookToLibrary() {
    
    let author = document.getElementById('author').value;
    let title = document.getElementById('title').value;
    let number = document.getElementById('page_number').value;
    let read = document.getElementById('read').value;
    let comments = document.getElementById('comments').value;
    let newBook = new Book(author, title, number, read, comments);
    newBook.addToMyLibrary();
    newBook.addToPage();
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click',() => {
        addBookToLibrary();
    });
});
