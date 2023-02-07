import { deleteTodo } from "./deleteTodo.js";
const todoList = document.getElementById('todoList');
export const displayTodo = (todo) => {
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
    removeBtn.id = (todo.id).toString();
    list.addEventListener('click', function () {
        list.style.color = "gray";
        list.style.textDecoration = "line-through";
    });
    removeBtn.addEventListener('click', deleteTodo);
};
