let root = document.querySelector('.quotes');

// function createQUI(){
//     quotes.forEach((quote) => {
//         let h1 = document.createElement('h1');
//         h1.innerText = "Quotes";
//         let p = document.createElement('p');
//         p.innerText = quote.quoteText;
//         p.classList.add('quote');
//         let h5 = document.createElement('h5');
//         h5.innerText = quote.quoteAuthor;
//         let h6 = document.createElement('h6');
//         h6.classList = 'h6';
//         root.append(p,h5,h6);
//     })
// }
// createQUI();

let max = 3;
let index = 0;

function addQuotes(){
    for (let i = 0; i < max; i++){
        let li = document.createElement('li');
        let blockquote = document.createElement('blockquote');
        blockquote.classList.add('quote');
        let cite = document.createElement('cite');
        blockquote.innerText = quotes[index].quoteText;
        cite.innerText = quotes[index].quoteAuthor;
        li.append(blockquote, cite);

        root.append(li);
        index++;
    }
}

addQuotes();

document.addEventListener('scroll', () => {
    let scrollTop = document.documentElement.scrollTop;
    let scrollHeight = document.documentElement.scrollHeight;
    let clientHeight = document.documentElement.clientHeight;
    if(scrollTop + clientHeight >= scrollHeight && index < quotes.length){
        addQuotes();
    }
});


document.addEventListener("DOMContentLoaded", ready);

function ready() {
    alert('The content of the DOM is loaded');
    addQuotes();
  }
// window.addEventListener('scroll', function() {
//     document.querySelector('h6').innerHTML = window.pageYOffset + 'px';
//   });
// function callScroll(event){
//     event.preventDefault();

// }
// callScroll();
// window.addEventListener('scroll', callScroll);

