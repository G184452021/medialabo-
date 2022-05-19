let eu = document.querySelector('li#EU');
eu.remove();
let ul = document.querySelector('ul');
let li;
li = document.createElement('li');
li.textContent = 'アジア大陸';
ul.insertAdjacentElement('beforeend', li);
li = document.createElement('li');
li.textContent = 'ヨーロッパ大陸';
ul.insertAdjacentElement('beforeend', li);

let h1 = document.querySelector('h1');
h1.Style.color = 'blue';
h1.style.fontSize = '10pt';

let h2s = document.querySelectorAll('h2');
h2s.style.backgroundColor = 'gray';

let ls = document.querySelectorAll('li');
undefined
for (let li of ls) {
    li.classList.add('orangeUnderline');
}