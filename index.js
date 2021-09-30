const baseURL = "https://anapioficeandfire.com/api/books";

function fetchBooks() {
  fetch(baseURL)
  .then(response => response.json())
  .then (object => object)
  
  
}




function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
