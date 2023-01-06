import { addTodo } from "./Todo/addTodo.js";
import { displayTodo } from "./Todo/displayTodo.js";
import {todoLists} from "./data.js";
import { Todo } from "./types/types.js";
const localKey = "todo"
const todoSubmit = document.querySelector('#todoSubmit') as HTMLElement;

//let todoLists = [];

todoSubmit.addEventListener('click', addTodo);

// todoInput.addEventListener('keyup', enterkey);

init();

function init() {
  const loadTodo = localStorage.getItem(localKey);
  if (loadTodo !== null) {
    const loadTodos = JSON.parse(loadTodo);
    loadTodos.forEach(function (data:Todo) {
      displayTodo(data);
      todoLists.push(data);
    });
  }
}

// function enterkey() {
//   if (window.event.keyCode == 13) {
//     addTodo();
//   }
// }