import { displayTodo } from "./displayTodo.js";
import {todoLists} from "../data.js";
const localKey = "todo";
let newId = 0;

export const addTodo = () => {
    let inputValue = todoInput;

    if (inputValue.value == "") {
      alert('todo를 추가해주세요.');
    }
    else {
      const todoObj = {
        todo: inputValue.value,
        id: newId,
      };
  
      displayTodo(todoObj);
  
      todoLists.push(todoObj);
      localStorage.setItem(localKey, JSON.stringify(todoLists));
      inputValue.value = null;
      newId++;
    }
  }