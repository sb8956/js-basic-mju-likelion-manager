var TodoArr = [];

function init() {
    
}

function addName() {
    var inputValue = document.getElementById('nameInput');
    var title = document.getElementById('title');

    localStorage.setItem("name", inputValue.value);
    title.innerHTML = localStorage.getItem("name")+'의 TodoList';
    inputValue.style.display='none';
}

function addTodo() {
    var inputValue = document.getElementById('todoInput');
    var todoList = document.getElementById('todoList');

    var wrapList = document.createElement('div');
    wrapList.classList.add('wrapList');
    todoList.appendChild(wrapList);

    if (!inputValue.value==null)
        alert('todo를 추가해주세요.');
    else {
        var list = document.createElement('li');
        var removeBtn = document.createElement('button');
        list.innerText = inputValue.value;
        wrapList.appendChild(list);
        removeBtn.innerText = 'x';
        wrapList.appendChild(removeBtn);
        removeBtn.classList.add('removeBtn');

        inputValue.value = "";
    }

    list.addEventListener('click', function () {
        list.style.color = "gray"
        list.style.textDecoration = "line-through";
    })
    removeBtn.addEventListener('click', function () {
        todoList.removeChild(wrapList);
        wrapList.removeChild(list);
        wrapList.removeChild(removeBtn);
    })
}