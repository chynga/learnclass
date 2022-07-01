import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const initialState = {
    loading: false,
    hasErrors: false,
    courses: [],
};

// A slice for recipes with our three reducers
const coursesSlice = createSlice({
    name: "courses",
    initialState,
    reducers: {
        getCourses: state => {
            state.loading = true;
        },
        getCoursesSuccess: (state, { payload }) => {
            state.courses = payload;
            state.loading = false;
            state.hasErrors = false;
        },
        getCoursesFailure: state => {
            state.loading = false;
            state.hasErrors = true;
        },
    },
});

// Three actions generated from the slice
export const { getCourses, getCoursesSuccess, getCoursesFailure } =
    coursesSlice.actions;

// A selector
export const coursesSelector = state => state.courses;

// The reducer
export const coursesReducer = coursesSlice.reducer;

// Asynchronous thunk action
export function fetchCourses() {
    return async dispatch => {
        dispatch(getCourses());

        try {
            const res = await axios.get("/api/courses");
            dispatch(getCoursesSuccess(res.data));
        } catch (error) {
            dispatch(getCoursesFailure());
        }
    };
}
