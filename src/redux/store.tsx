import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './filterSlice';
import todoListslice from './todoListslice';

const rootStore = configureStore({
    reducer: {
        filters: filterSlice.reducer,
        todoList: todoListslice.reducer
    }
})

export default rootStore