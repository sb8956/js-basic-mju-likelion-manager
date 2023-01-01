const todoList = document.getElementById('todoList');
const todoInput = document.getElementById('todoInput');
const todolistDiv = document.getElementById('todoList');
const todoSubmit = document.getElementById('todoSubmit');
const localKey = "todo"

let todoLists = [];

todoSubmit.addEventListener('click', addTodo);
todoInput.addEventListener('keyup', enterkey);

function init() {
  const loadTodo = localStorage.getItem(localKey);
  if (loadTodo !== null) {
    const loadTodos = JSON.parse(loadTodo);
    loadTodos.forEach(function (data) {
      displayTodo(data);
      todoLists.push(data);
    });
  }
}

function enterkey() {
  if (window.event.keyCode == 13) {
    addTodo();
  }
}

function displayTodo(todo) {
  let wrapList = document.createElement('div');
  let list = document.createElement('li');
  let removeBtn = document.createElement('button');

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
  let inputValue = todoInput;
  const newId = 0;

  console.log(inputValue.value)


  if (inputValue.value == "") {
    alert('todo를 추가해주세요.');
  }
  else {
    const todoObj = {
      todo: inputValue.value,
      id: newId + 1,
    };

    displayTodo(todoObj);

    todoLists.push(todoObj);
    localStorage.setItem(localKey, JSON.stringify(todoLists));
    inputValue.value = null;
  }
}

function deleteTodo(event) {
  const btn = event.target;
  const wrapList = btn.parentNode;
  const todolist = todolistDiv;

  todolist.removeChild(wrapList);
  const removeTodo = todoLists.filter(function (todo) {
    return todo.id !== parseInt(btn.id);
  });
  todoLists = removeTodo;

  localStorage.setItem(localKey, JSON.stringify(removeTodo));
}