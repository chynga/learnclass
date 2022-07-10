import axios from "axios";

const API_URL = "/api/courses/";

// Create new course
const createCourse = async (courseData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await axios.post(API_URL, courseData, config);

    return response.data;
};

// Get courses
const getCourses = async _ => {
    const response = await axios.get(API_URL);

    return response.data;
};

// Get course by id
const getCourseById = async courseId => {
    const response = await axios.get(API_URL + courseId);

    return response.data;
};

// Delete course
const deleteCourse = async (courseId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await axios.delete(API_URL + courseId, config);

    return response.data;
};

const courseService = {
    createCourse,
    getCourses,
    getCourseById,
    deleteCourse,
};

export default courseService;
