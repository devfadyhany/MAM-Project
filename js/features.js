const ul = document.getElementById('example-list');

const items = ['Good', 'Modern', 'Affordable', 'Available'];

items.forEach(item => {

    const li = document.createElement('li');
    li.className = 'examples';
    li.textContent = item;
    ul.appendChild(li);

});