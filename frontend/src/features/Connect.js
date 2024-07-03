import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const checkUser = createAsyncThunk("checkUser", async (data, { rejectWithValue }) => {
    try {
        const response = await fetch("http://127.0.0.1:8000/api/token/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
            credentials: "include"
        });

        const val = await response.json();
        return val;
    } catch (e) {
        return rejectWithValue(e.message);
    }
});

export const getGroceries = createAsyncThunk("getGroceries", async (_, {  rejectWithValue }) => {
    try {
        const response = await fetch("http://127.0.0.1:8000/api/groceries", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },

        });
        const val = await response.json();
        return val;
    } catch (e) {
        return rejectWithValue(e.message);
    }
});



export const postGroceries = createAsyncThunk("postGroceries", async (data, {  rejectWithValue }) => {
    try {
        const response = await fetch("http://127.0.0.1:8000/api/groceries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify(data),
            credentials: "include"
        });
        const val = await response.json();
        return Object.values(val);
    } catch (e) {
        return rejectWithValue(e.message);
    }
});



export const user = createSlice({
    name: "user",
    initialState: {
        users: [],
        groceries: [],
        loading: false,
        error: null,
    },
    reducers: {

        logout: (state) => {
            state.users = [];
            state.groceries = [];
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(checkUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(checkUser.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(checkUser.rejected, (state, action) => {
                state.loading = false;
                state.users = action.payload;
                state.error = action.payload;
            })

            // Getting list of groceries
            .addCase(getGroceries.pending, (state) => {
                state.loading = true;
            })
            .addCase(getGroceries.fulfilled, (state, action) => {
                state.loading = false;
                state.groceries = action.payload;
            })
            .addCase(getGroceries.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })


            // Adding list of groceries
            .addCase(postGroceries.pending, (state) => {
                state.loading = true;
            })
            .addCase(postGroceries.fulfilled, (state, action) => {
                state.loading = false;
                state.groceries.push(action.payload);
            })
            .addCase(postGroceries.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });

    }
});

export const { logout } = user.actions;

export default user.reducer;
