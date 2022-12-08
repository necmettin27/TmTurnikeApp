import { createSlice } from "@reduxjs/toolkit"
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = {
    isLoggedIn: false,
    email: null,
    userName: null,
    token: null
}

const authSlice = createSlice({
    name: 'userAuth',
    initialState,
    reducers: {
        setSignIn: (state, action) => {
            state.email = action.payload.email;
            state.isLoggedIn = action.payload.isLoggedIn;
            state.userName = action.payload.userName;
            state.token = action.payload.token;
        },
        setSignOut: (state) => {
            state.email = null;
            state.userName = null;
            state.isLoggedIn = false;
            state.token = null;
        },
        setisLoggin : (state,action) => {
            state.email = action.payload.email ?? null;
            state.isLoggedIn = action.payload.isLoggedIn ?? null;
            state.userName = action.payload.userName ?? null;
            state.token = action.payload.token ?? null;
        }
    }
});

export const { setSignIn, setSignOut, setisLoggin} = authSlice.actions;

export const selectIsLoggedIn = (state) => state.userAuth.isLoggedIn;
export const selectEmail = (state) => state.userAuth.email;
export const selectUserName = (state) => state.userAuth.userName;
export const selectToken = (state) => state.userAuth.token;

export default authSlice.reducer;