import axios from "axios";

// Create new assignment
const createAssignment = async (assignmentData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await axios.post(
        `/api/courses/${assignmentData.course}/assignments`,
        assignmentData,
        config
    );

    return response.data;
};

// Get assignments
const getAssignments = async (courseId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await axios.get(
        `/api/courses/${courseId}/assignments`,
        config
    );

    return response.data;
};

// Get assignment by id
const getAssignmentById = async (courseId, assignmentId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await axios.get(
        `/api/courses/${courseId}/assignments/${assignmentId}`,
        config
    );

    return response.data;
};

// Delete assignment
const deleteAssignment = async (courseId, assignmentId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await axios.delete(
        `/api/courses/${courseId}/assignments/${assignmentId}`,
        config
    );

    return response.data;
};

// Update assignment
const updateAssignment = async (assignment, assignmentId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await axios.put(
        `/api/courses/${assignment.course}/assignments/${assignmentId}`,
        assignment,
        config
    );

    return response.data;
};

const assignmentService = {
    createAssignment,
    getAssignments,
    getAssignmentById,
    deleteAssignment,
    updateAssignment,
};

export default assignmentService;
