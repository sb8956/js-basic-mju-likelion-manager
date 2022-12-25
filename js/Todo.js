
function addTodo() {
    var inputValue = document.getElementById('todoInput');
    var todoList = document.getElementById('todoList');

    var list = document.createElement('li');
    var removeBtn = document.createElement('button');

    if (!inputValue.value)
        alert('todo를 추가해주세요.');
    else {
        list.innerText = inputValue.value;
        todoList.appendChild(list);
        removeBtn.innerText = 'x';
        todoList.appendChild(removeBtn);

        inputValue.value = "";
    }

    list.addEventListener('click', function () {
        list.style.color = "gray"
        list.style.textDecoration = "line-through";
    })
    removeBtn.addEventListener('click', function () {
        todoList.removeChild(list);
        todoList.removeChild(removeBtn);
    })
}