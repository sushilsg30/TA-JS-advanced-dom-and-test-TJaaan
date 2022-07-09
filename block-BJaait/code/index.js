let form = document.querySelector('form');
let ul = document.querySelector('ul');
let input = document.querySelector('input');


let dragData = [];

form.addEventListener('submit', (event) =>{
    event.preventDefault();

    let dragValue = form.elements.text.value;
    dragData.push({dragValue});
    createUI();
})

function createUI(data = dragData, root = ul) {
    root.innerHTML = "";
    let fragment = new DocumentFragment();
    data.forEach((cardInfo) => {
        let li = document.createElement('li');
        let p = document.createElement('p');

        p.innerText = cardInfo.dragValue;
        li.append(p);
        fragment.appendChild(li);
    });
    root.append(fragment);
}

createUI(dragData, ul);