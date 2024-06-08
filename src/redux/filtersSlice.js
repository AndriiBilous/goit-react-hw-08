import { createSlice } from '@reduxjs/toolkit';
const slice = createSlice({
    name: 'filters',
    initialState: {
        name: '',
    },
    reducers: {
        filterItem: {
            reducer: (state, action) => {
                state.name = action.payload;
            },
        },
    },
});
export const selectFilter = state => state.filters.name;
export const { filterItem } = slice.actions;
export default slice.reducer;
