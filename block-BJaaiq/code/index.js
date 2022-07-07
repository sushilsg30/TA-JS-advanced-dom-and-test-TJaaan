let quotesdiv = document.querySelector('.quotes');
let p = document.createElement('p');

function createQUI(){
    quotes.forEach((quote) => {
        let h1 = document.createElement('h1');
        h1.innerText = "Quotes";
        let p = document.createElement('p');
        p.innerText = quote.quoteText;
        p.classList.add('quote');
        let h5 = document.createElement('h5');
        h5.innerText = quote.quoteAuthor;
        let h6 = document.createElement('h6');
        h6.classList = 'h6';
        quotesdiv.append(p,h5,h6);
    })
}
createQUI();

document.addEventListener("DOMContentLoaded", ready);

function ready() {
    alert('The content of the DOM is loaded');
  }
window.addEventListener('scroll', function() {
    document.querySelector('h6').innerHTML = window.pageYOffset + 'px';
  });
// function callScroll(event){
//     event.preventDefault();

// }
// callScroll();
// window.addEventListener('scroll', callScroll);

