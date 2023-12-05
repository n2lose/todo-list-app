import { createSlice } from "@reduxjs/toolkit";

export interface FiltersStateInterface {
    search: string;
    status: string;
    priorities: string[];
}

const initialFiltersState: FiltersStateInterface = {
    search: '',
    status: 'All',
    priorities: []
}

export default createSlice({
    name: "filters",
    initialState: initialFiltersState,
    reducers: {
        filterSearch:(state, action)=> {
            state.search = action.payload
        },
        filterStatus: (state, action) => {
            state.status = action.payload
        },
        filterPriorities: (state, action) => {
            state.priorities = action.payload
        }
    }
})