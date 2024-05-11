import { createSlice } from "@reduxjs/toolkit";
import { Session } from "@supabase/supabase-js";
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './index'

interface AuthState {
    isAuthenticated: Session | null;
}

const initialAuthState: AuthState = {
    isAuthenticated: null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        // setSession(state, action: { payload: Session | null }) {
        setSession(state, action: PayloadAction<Session | null>) {
            state.isAuthenticated = action.payload;
        }
    }
});

export const { setSession } = authSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const authSt = (state: RootState) => state.auth.isAuthenticated

export default authSlice.reducer;