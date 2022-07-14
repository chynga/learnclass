import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import assignmentService from "./assignmentService";

const initialState = {
    assignments: [],
    selectedAssignment: {},
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
};

// Create new assignment
export const createAssignment = createAsyncThunk(
    "assignments/create",
    async (courseId, assignmentData, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token;
            return await assignmentService.createAssignment(
                courseId,
                assignmentData,
                token
            );
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

// Get all assignments
export const getAssignments = createAsyncThunk(
    "assignments/index",
    async (courseId, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token;
            return await assignmentService.getAssignments(courseId, token);
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

// Get assignment by id
export const getAssignmentById = createAsyncThunk(
    "assignments/show",
    async (courseId, assignmentId, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token;
            return await assignmentService.getAssignmentById(
                courseId,
                assignmentId,
                token
            );
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

// Delete course
export const deleteAssignment = createAsyncThunk(
    "assignments/delete",
    async (courseId, assignmentId, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token;
            return await assignmentService.deleteAssignment(
                courseId,
                assignmentId,
                token
            );
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const assignmentSlice = createSlice({
    name: "assignment",
    initialState,
    reducers: {
        reset: state => initialState,
    },
    extraReducers: builder => {
        builder
            .addCase(createAssignment.pending, state => {
                state.isLoading = true;
            })
            .addCase(createAssignment.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.assignments.push(action.payload);
            })
            .addCase(createAssignment.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(getAssignments.pending, state => {
                state.isLoading = true;
            })
            .addCase(getAssignments.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.assignments = action.payload;
            })
            .addCase(getAssignments.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(getAssignmentById.pending, state => {
                state.isLoading = true;
            })
            .addCase(getAssignmentById.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.selectedAssignment = action.payload;
            })
            .addCase(getAssignmentById.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(deleteAssignment.pending, state => {
                state.isLoading = true;
            })
            .addCase(deleteAssignment.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.assignments = state.assignments.filter(
                    assignment => assignment._id !== action.payload.id
                );
            })
            .addCase(deleteAssignment.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            });
    },
});

export const { reset } = assignmentSlice.actions;
export default assignmentSlice.reducer;
