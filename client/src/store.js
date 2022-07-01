import { configureStore } from "@reduxjs/toolkit";
import { courseReducer } from "./slices/course";
import { coursesReducer } from "./slices/courses";

const store = configureStore({
    reducer: { courses: coursesReducer, course: courseReducer },
});

export default store;
