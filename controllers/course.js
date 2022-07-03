const asyncHandler = require("express-async-handler");
const Course = require("../models/Course");

// @desc    Get courses
// @route   GET /api/courses
// @access  Private
const getCourses = asyncHandler(async (req, res) => {
    const course = await Course.find().sort({ name: 1 });

    res.status(200).json(course);
});

// @desc    add course
// @route   POST /api/courses
// @access  Private
const addCourse = asyncHandler(async (req, res) => {
    const course = await Course.create({
        teacher: req.user.id,
        name: req.body.name,
        description: req.body.description,
    });

    res.status(200).json(course);
});

// @desc    get course
// @route   GET /api/courses/:id
// @access  Private
const getCourse = asyncHandler(async (req, res) => {
    const course = await Course.findById(req.params.id);
    res.status(200).json(course);
});

// @desc    Update course
// @route   PUT /api/courses/:id
// @access  Private
const updateCourse = asyncHandler(async (req, res) => {
    const course = await Course.findById(req.params.id);

    if (!course) {
        res.status(400);
        throw new Error("Course not found");
    }

    const updatedCourse = await Course.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true,
        }
    );

    res.status(200).json(updatedCourse);
});

// @desc    Delete course
// @route   DELETE /api/courses/:id
// @access  Private
const deleteCourse = asyncHandler(async (req, res) => {
    const course = await Course.findById(req.params.id);

    if (!course) {
        res.status(400);
        throw new Error("Course not found");
    }

    await course.remove();

    res.status(200).json({ id: req.params.id });
});

module.exports = {
    getCourses,
    addCourse,
    getCourse,
    deleteCourse,
    updateCourse,
};
