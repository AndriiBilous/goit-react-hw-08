import { createSlice } from '@reduxjs/toolkit';
const slice = createSlice({
    name: 'filters',
    initialState: {
        name: '',
        number: '',
    },
    reducers: {
        filterItem: {
            reducer: (state, action) => {
                state.name = action.payload;
                state.number = action.payload;
            },
        },
    },
});

export const { filterItem } = slice.actions;
export default slice.reducer;
