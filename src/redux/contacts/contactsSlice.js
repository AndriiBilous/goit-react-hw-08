import { createSlice, createSelector } from '@reduxjs/toolkit';
import {
    fetchContacts,
    addContact,
    deleteContact,
    patchContact,
} from './operations';
import { selectFilter } from '../filters/selectors';
import { logOut } from '../auth/operations';
import { selectItem } from './selectors';

const slice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        loading: false,
        error: false,
    },
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
            })
            .addCase(logOut.fulfilled, state => {
                state.items = [];
                state.loading = false;
                state.error = false;
            })
            .addCase(patchContact.pending, state => {
                state.error = false;
                state.loading = true;
            })
            .addCase(patchContact.fulfilled, (state, action) => {
                state.items.findIndex(item => {
                    if (item.id === action.payload.id) {
                        item.name = action.payload.name;
                        item.number = action.payload.number;
                    }
                });
                state.loading = false;
            })
            .addCase(patchContact.rejected, state => {
                state.loading = false;
                state.error = true;
            });
    },
});

export default slice.reducer;

export const selectFilteredContacts = createSelector(
    [selectItem, selectFilter],
    (contacts, filters) => {
        return contacts.filter(contact => {
            return (
                contact.name.toLowerCase().includes(filters.toLowerCase()) ||
                contact.number.includes(filters)
            );
        });
    },
);
