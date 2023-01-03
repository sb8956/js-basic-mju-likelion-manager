import {Todo} from './types/types'
export let todoLists:Array<Todo> = [];
export const saveTodoLists = (data:Array<Todo>) => {
    todoLists = data;
};