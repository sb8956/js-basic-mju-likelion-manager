const todolistDiv = document.getElementById('todoList') as HTMLElement;
const localKey = "todo"
import { todoLists, saveTodoLists } from "../data.js";

export const deleteTodo = (event:any) => {
    console.log(todoLists);
    const btn = event.target;
    const wrapList = btn.parentNode;
    console.log(btn.id);
    todolistDiv.removeChild(wrapList);

    const removeTodo = todoLists.filter(function (todo) {
      return todo.id !== parseInt(btn.id);
    });
    console.log(removeTodo);

    saveTodoLists(removeTodo);
  
    localStorage.setItem(localKey, JSON.stringify(removeTodo));
  }