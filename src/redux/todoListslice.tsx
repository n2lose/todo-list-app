import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export interface TodoInterface {
    id: string;
    text: string;
    priority: string;
    completed: boolean;
}

const initialTodoListstate: TodoInterface[] = [{
    "id": 'fb0c924d-2454-5454-ba66-7ae0d9a7ab38',
    "text": "sollicitudin ut suscipit a feugiat et eros",
    "priority": "Medium",
    "completed": false
  }, {
    "id": '57ce9cb7-ab3d-58cf-a926-f670bddc8e3b',
    "text": "pede ullamcorper augue a suscipit nulla",
    "priority": "High",
    "completed": false
  }, {
    "id": '0d557645-cef5-5f0e-b6da-e7b881427a37',
    "text": "metus sapien ut nunc vestibulum",
    "priority": "Low",
    "completed": false
  }, {
    "id": '9934b332-8287-5d7a-a855-b5546dfd643d',
    "text": "sit amet diam in magna",
    "priority": "Medium",
    "completed": false
  }, {
    "id": '4f6572b2-b38e-5cb4-85be-395f35c54f4b',
    "text": "in lectus pellentesque at nulla suspendisse potenti cras",
    "priority": "Low",
    "completed": true
}]


const todoListReducer = {
    addTodo: (state: TodoInterface[], action: PayloadAction<TodoInterface>) => {
        state.push(action.payload)
    },
    toggleTodo: (state: TodoInterface[], action: PayloadAction<{}>) => {
        const currentIndex = state.findIndex((todo) => todo.id === action.payload)
        if(currentIndex) state[currentIndex].completed = !state[currentIndex].completed
    },
    deleteTodo: (state: TodoInterface[], action: PayloadAction<{}>) => {
        const index = state.findIndex(todo => todo.id === action.payload);
        index > -1 ? state.slice(index, 1) : false
    }    
}

export default createSlice({
    name: 'todoList',
    initialState: initialTodoListstate,
    reducers: todoListReducer
})