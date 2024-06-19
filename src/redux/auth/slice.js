import { createSlice } from '@reduxjs/toolkit';
import { logOut, refreshUser, register } from './operations';
import { logIn } from './operations';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: {
            name: null,
            email: null,
        },
        token: null,
        isLoggedIn: false,
        isRefreshing: false,
        isRefreshing: false,
    },
    extraReducers: builder =>
        builder
            .addCase(register.pending, state => {})
            .addCase(register.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            })
            .addCase(register.rejected, state => {
                // state.loading = false;
                // state.error = true;
            })
            .addCase(logIn.pending, state => {})
            .addCase(logIn.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            })
            .addCase(logIn.rejected, state => {})
            .addCase(logOut.pending, state => {})
            .addCase(logOut.fulfilled, state => {
                state.user = {
                    name: null,
                    email: null,
                };
                state.token = null;
                state.isLoggedIn = false;
            })
            .addCase(logOut.rejected, state => {})
            .addCase(refreshUser.pending, state => {
                state.isRefreshing = true;
            })
            .addCase(refreshUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isLoggedIn = true;
                state.isRefreshing = false;
            }),
});
export default authSlice.reducer;
