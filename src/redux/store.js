import { configureStore } from '@reduxjs/toolkit';
import itemReducer from './contactsSlice';
import filterReducer from './filtersSlice';

export const store = configureStore({
    reducer: { contacts: itemReducer, filters: filterReducer },
});
