import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const initialState = {
    loading: false,
    hasErrors: false,
    course: {},
};

// A slice for recipes with our three reducers
const courseSlice = createSlice({
    name: "course",
    initialState,
    reducers: {
        getCourse: state => {
            state.loading = true;
        },
        getCourseSuccess: (state, { payload }) => {
            state.course = payload;
            state.loading = false;
            state.hasErrors = false;
        },
        getCourseFailure: state => {
            state.loading = false;
            state.hasErrors = true;
        },
    },
});

// Three actions generated from the slice
export const { getCourse, getCourseSuccess, getCourseFailure } =
    courseSlice.actions;

// A selector
export const courseSelector = state => state.course;

// The reducer
export const courseReducer = courseSlice.reducer;

// Asynchronous thunk action
export function fetchCourse(id) {
    return async dispatch => {
        dispatch(getCourse());

        try {
            const res = await axios.get(`/api/courses/${id}`);
            dispatch(getCourseSuccess(res.data));
        } catch (error) {
            dispatch(getCourseFailure());
        }
    };
}
