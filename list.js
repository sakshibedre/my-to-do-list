let input = document.getElementById('input');
let addInput = document.getElementById('add-input');
let todos = document.getElementById('todos')

addInput.addEventListener('click', function () {
    var p = document.createElement('p');
    p.className = "todo";
    p.innerText = input.value;
    todos.appendChild(p);
    input.value = ""

    p.addEventListener('click', function () {
        p.style.textDecoration = 'line-through'
    })
    p.addEventListener('dblclick', function () {
        todos.removeChild(p);
    })
})
