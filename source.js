const myLibrary = [];

function Book(author, title, number, read, comments) {
    this.author = author;
    this.title = title;
    this.number = number;
    this.read = read;
    this.comments = comments;
    let book = [author, title, number, read, comments];
    myLibrary.push(book);
    const card = document.createElement('div');
    card.style.background = 'white';
    card.style.height = '100px';
    card.style.width = '200px';
    card.style.margin = '8px';
    card.style.overflow = 'auto';
    for(let i = 0; i < book.length; i++){
        const cardContent = document.createElement('p');
        card.appendChild(cardContent);
        cardContent.textContent = `${book[i]}`;
    }
    let left = document.querySelector('.left');
    left.appendChild(card);
}

function addBookToLibrary() {
    
    let author = document.getElementById('author').value;
    let title = document.getElementById('title').value;
    let number = document.getElementById('page_number').value;
    let read = document.getElementById('read').value;
    let comments = document.getElementById('comments').value;
    Book(author, title, number, read, comments);
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click',() => {
        addBookToLibrary();
    });
});
