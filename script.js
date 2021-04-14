const h1 = document.createElement('h1');
h1.textContent = 'Book List';
document.body.style.boxSizing = 'border-box';
document.body.style.margin = '0px';
document.body.style.display = 'flex';
document.body.style.flexDirection = 'column';
document.body.style.alignItems = 'center';
document.body.appendChild(h1);

const listOfBooks = [
    {title: 'Sangele Sfant si Sfantul Graal', author: ['Michael Baigent', 'Richard Leigh','Henry Lincoln'], readed: true, url:'https://carturesti.ro/carte/sangele-sfant-si-sfantul-graal-59417'},
    {title:'Codul lui Da Vinci', author: 'Dan Brown', readed: true, url: 'https://danbrown.com/the-davinci-code/'},
    {title: 'Al cincelea munte', author: 'Paolo Coelho', readed: false},
    {title: 'Conspiratia', author: 'Dan Brown', readed: false},
    {title: 'Ingeri si demoni', author: 'Paolo Coelho', readed: true, url: 'https://danbrown.com/angels-demons/'},
    {title: 'Iezuitii', author: 'Johnatan Wright', readed: true, url: 'https://carturesti.ro/carte/iezuitii-misiune-mituri-si-istorie-59897'},
    {title: 'Aleph', author: 'Paolo Coelho', readed: true},
    {title: 'Fortareata Digitala', author: 'Dan Brown', readed: false},
    {title: 'Adolescentul', author: 'Fyodor Dostoevsky ', readed: true}
];

const books = document.createElement('ul');
for (book of listOfBooks) {
    const listBooks = [];
    const bookList = document.createElement('li');
    bookList.textContent = `${book.title} - ${book.author}`;
    bookList.style.marginBottom = '10px';
    bookList.style.fontWeight = '700';
    bookList.style.display = 'flex';
    bookList.style.justifyContent = 'space-between';
    bookList.style.border = '1px solid black';
    bookList.style.padding = '5px';
    listBooks.push(bookList);
    books.style.width = '80vw'
    books.appendChild(bookList);

    if (book.readed === true) {
        bookList.style.backgroundColor = 'lightGreen';
    } else {
        bookList.style.backgroundColor = 'red';
    }

    if (book.url){
        const a = document.createElement('a');
        a.href = book.url;
        a.textContent = 'Click pentru mai multe detalii.'
        a.style.textDecoration = 'none';
        a.style.fontSize = '10px';
        bookList.appendChild(a);
    }
    
    for (bk of listBooks) {
        const img = document.createElement('img');
        img.src = 'https://picsum.photos/200/300?random=6';
        img.getAttribute("alt", "cover photo");
        img.style.width = '100px';
        img.style.height = '100px';
        img.style.marginLeft = '10px';
        img.style.border = '1px solid black';
        bookList.appendChild(img);
    }
}

document.body.appendChild(books);







