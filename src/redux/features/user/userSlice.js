import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "Md Mosaddek",
    email: 'mosaddek@gmail.com',
    userTasks: [],
}

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {},
})

export default userSlice.reducer;