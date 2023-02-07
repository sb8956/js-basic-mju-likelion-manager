const todolistDiv = document.getElementById('todoList');
const localKey = "todo";
import { todoLists, saveTodoLists } from "../data.js";
export const deleteTodo = (event) => {
    const btn = event.target;
    const wrapList = btn.parentNode;
    todolistDiv.removeChild(wrapList);
    const removeTodo = todoLists.filter(function (todo) {
        return todo.id !== parseInt(btn.id);
    });
    saveTodoLists(removeTodo);
    localStorage.setItem(localKey, JSON.stringify(removeTodo));
};
