import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// const setAuthHeader = thunk => {
//     const reduxState = thunk.getState();
//     axios.defaults.headers.common.Authorization = `Bearer ${reduxState.auth.token}`;
// };

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, thunkAPI) => {
        try {
            // setAuthHeader(thunkAPI);
            const response = await axios.get('/contacts');
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    },
);
export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (newContact, thunkAPI) => {
        try {
            // setAuthHeader(thunkAPI);
            const response = await axios.post(`/contacts`, newContact);
            console.log(response.data);

            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    },
);
export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (id, thunkAPI) => {
        try {
            // setAuthHeader(thunkAPI);
            const response = await axios.delete(`/contacts/${id}`);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    },
);
