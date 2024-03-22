import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./features/tasks/tasksSlice";
import UserSlice from "./features/user/UserSlice";

const store = configureStore({
    reducer: {
        tasksSlice: tasksSlice,
        userSlice: UserSlice,
    },
});

export default store;