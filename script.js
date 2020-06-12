/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");

class MyComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<p>Copyright 2020</p>`;
  }
}
    
customElements.define('copyright-footer', MyComponent);


////////////////////////////
//Below shows Shadow DOM code
//Meaning it can isolate a style instead of using the default in css
////////////////////////////

const shadowRoot = document.getElementById('example').attachShadow({ mode: 'open' });
shadowRoot.innerHTML = `<style>
button {
  background: tomato;
  color: white;
}
</style>
<button id="button"><slot></slot> input</button>`;

////////////////////////////
//Below shows Template example
///////////////////////////

'use strict';

const books = [
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  { title: 'A Farewell to Arms', author: 'Ernest Hemingway' },
  { title: 'Catch 22', author: 'Joseph Heller' }
];


// function that will change the book template
function appendBooks(templateId) {
  const booksList = document.getElementById('books');
  const fragment = document.getElementById(templateId);
  
  // Clear out the content from the ul before setting new template
  booksList.innerHTML = '';
  
  // Loop over the books and modify the given template
  books.forEach(book => {
    // Create an instance of the template content
    const instance = document.importNode(fragment.content, true);
    // Add relevant content to the template
    instance.querySelector('.title').innerHTML = book.title;
    instance.querySelector('.author').innerHTML = book.author;
    // Append the instance ot the DOM
    booksList.appendChild(instance);
  });  
}


document.getElementById('templates').addEventListener('change', (event) => appendBooks(event.target.value));

appendBooks('book-template');