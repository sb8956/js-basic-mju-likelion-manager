import {Todo} from './types/types.js'
export let todoLists:Array<Todo> = [];
export const saveTodoLists = (data:Array<Todo>) => {
    todoLists = data;
};