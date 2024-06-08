import { createSlice, createSelector } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from '../redux/contactsOps';
import { selectFilter } from './filtersSlice';

const slice = createSlice({
    name: 'contacts',
    initialState: { items: [], loading: false, error: false },
    extraReducers: builder => {
        builder
            .addCase(fetchContacts.pending, state => {
                state.error = false;
                state.loading = true;
            })
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.items = action.payload;
                state.loading = false;
            })
            .addCase(fetchContacts.rejected, state => {
                state.loading = false;
                state.error = true;
            })
            .addCase(addContact.pending, state => {
                state.error = false;
                state.loading = true;
            })
            .addCase(addContact.fulfilled, (state, action) => {
                state.items.push(action.payload);
                state.loading = false;
            })
            .addCase(addContact.rejected, state => {
                state.loading = false;
                state.error = true;
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.items = state.items.filter(
                    item => item.id !== action.payload.id,
                );
                state.loading = false;
            });
    },
});
export const selectItem = state => state.contacts.items;
export const { loading, error } = slice.actions;
export default slice.reducer;

export const selectFilteredContacts = createSelector(
    [selectItem, selectFilter],
    (contacts, filters) => {
        return contacts.filter(contact => {
            return contact.name.toLowerCase().includes(filters.toLowerCase());
        });
    },
);
