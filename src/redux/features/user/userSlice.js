import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "Mosaddek",
    email: 'mosaddek@gmail.com',
}

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {},
});

export default userSlice.reducer;