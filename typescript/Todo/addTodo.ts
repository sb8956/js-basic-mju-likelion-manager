import { displayTodo } from "./displayTodo.js";
import {todoLists} from "../data.js";
import { Todo } from "../types/types.js";

const todoInput = document.querySelector('#todoInput') as HTMLInputElement;

const localKey = "todo";
let newId = 0;

export const addTodo = () => {
    // let inputValue = value;

    if (todoInput.value == "") {
      alert('todo를 추가해주세요.');
    }
    else {
      const todoObj:Todo = {
        todo: todoInput.value,
        id: newId,
      };
  
      displayTodo(todoObj);
  
      todoLists.push(todoObj);
      localStorage.setItem(localKey, JSON.stringify(todoLists));
      todoInput.value = "";
      newId++;
    }
  }