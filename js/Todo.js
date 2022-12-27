const todoList = document.getElementById('todoList');
let todoLists = [];

init();

function init() {
  const loadTodo = localStorage.getItem("todo");
  if (loadTodo !== null) {
    const loadTodos = JSON.parse(loadTodo);
    loadTodos.forEach(function (data) {
      displayTodo(data);
      todoLists.push(data);
    });
  }
}

function displayTodo(todo) {
  var wrapList = document.createElement('div');
  var list = document.createElement('li');
  var removeBtn = document.createElement('button');

  wrapList.classList.add('wrapList');
  todoList.appendChild(wrapList);

  list.innerText = todo.todo;
  wrapList.appendChild(list);
  removeBtn.innerText = 'x';
  wrapList.appendChild(removeBtn);
  removeBtn.classList.add('removeBtn');
  removeBtn.id = todo.id;

  list.addEventListener('click', function () {
    list.style.color = "gray"
    list.style.textDecoration = "line-through";
  })
  removeBtn.addEventListener('click', deleteTodo);
}

function addTodo() {
  var inputValue = document.getElementById('todoInput');
  const newId = todoLists.length + 1;

  if (inputValue.value == "")
    alert('todo를 추가해주세요.');

  else {
    const todoObj = {
      todo: inputValue.value,
      id: newId,
    };

    displayTodo(todoObj);

    todoLists.push(todoObj);
    localStorage.setItem("todo", JSON.stringify(todoLists));
    inputValue.value = "";
  }
}

function deleteTodo(event) {
  const btn = event.target;
  console.log(btn)
  const wrapList = btn.parentNode;
  const todolist = document.getElementById('todoList');

  todolist.removeChild(wrapList);
  const removeTodo = todoLists.filter(function (todo) {
    return todo.id !== parseInt(btn.id);
  });
  todoLists = removeTodo;

  localStorage.setItem("todo", JSON.stringify(removeTodo));
}