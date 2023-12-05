import { createSelector } from "@reduxjs/toolkit";
import { FiltersStateInterface } from "./filterSlice";
import { TodoInterface } from "./todoListslice";

export type RootState = {
    filters: FiltersStateInterface;
    todoList: TodoInterface[];
}

export const searchTextSelector = (state: RootState) => state.filters.search
export const statusSelector = (state: RootState) => state.filters.status
export const prioritiesSelector = (state: RootState) => state.filters.priorities
export const todoListSelector = (state: RootState) => state.todoList

export const todoListRemainingSelector = createSelector(todoListSelector, searchTextSelector, statusSelector, prioritiesSelector, 
    (todoList, searchText, status, priorities) => {
        return todoList.filter( todo => {
            if(status === 'All') {
                return priorities.length > 0 ? 
                    todo.text.includes(searchText) && priorities.includes(todo.priority) : 
                    todo.text.includes(searchText)
            }

            return todo.text.includes(searchText) && 
                    (status === 'Completed' ? todo.completed: !todo.completed ) &&
                    (priorities.length > 0 ? priorities.includes(todo.priority) : true)
        })
    })