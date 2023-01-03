// const todoList = document.getElementById('todoList');
const todoInput = document.getElementById('todoInput');
// const todolistDiv = document.getElementById('todoList');
const todoSubmit = document.getElementById('todoSubmit');
import { addTodo } from "./Todo/addTodo.js";
import { displayTodo } from "./Todo/displayTodo.js";
import {todoLists} from "./data.js";
const localKey = "todo"

//let todoLists = [];

todoSubmit.addEventListener('click', addTodo);
todoInput.addEventListener('keyup', enterkey);

init();

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