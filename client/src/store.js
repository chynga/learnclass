import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from "./features/courses/courseSlice";
import assignmentReducer from "./features/assignments/assignmentSlice";
import authReducer from "./features/auth/authSlice";

const store = configureStore({
    reducer: {
        courses: coursesReducer,
        assignments: assignmentReducer,
        auth: authReducer,
    },
});

export default store;
