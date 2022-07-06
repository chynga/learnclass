import { configureStore } from "@reduxjs/toolkit";
import { courseReducer } from "./slices/course";
import { coursesReducer } from "./slices/courses";
import authReducer from "./features/auth/authSlice";

const store = configureStore({
    reducer: {
        courses: coursesReducer,
        course: courseReducer,
        auth: authReducer,
    },
});

export default store;
