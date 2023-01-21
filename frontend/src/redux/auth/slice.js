import { createSlice } from '@reduxjs/toolkit';
import {register, logIn, logOut, fetchCurrentUser} from './operations';

const authInitialState = {
    user: {name: null, email: null},
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState: authInitialState,
    extraReducers: {
        [register.fulfilled](state, action) {
            const { user, token } = action.payload;
            state.user = user;
            state.token = token;
            state.isLoggedIn = true;
            state.error = null;
        },
        [register.rejected](state, action) {
            state.error = action.payload;
        },
        [logIn.fulfilled](state, action) {
            const { user, token } = action.payload;
            state.user = user;
            state.token = token;
            state.isLoggedIn = true;
            state.error = null;
        },
        [logIn.rejected](state, action) {
            state.error = action.payload;
        },
        [logOut.fulfilled](state) {
            state.user = {name: null, email: null};
            state.token = null;
            state.isLoggedIn = false;
            state.error = null;
        },
        [fetchCurrentUser.pending](state) {
            state.isRefreshing = true;
        },
        [fetchCurrentUser.fulfilled](state, action) {
            state.user = action.payload.user;
            state.isLoggedIn = true;
            state.isRefreshing = false;
            state.error = null;
        },
        [fetchCurrentUser.rejected](state) {
            state.isRefreshing = false;
        },
    },
});

export const authReducer = authSlice.reducer;