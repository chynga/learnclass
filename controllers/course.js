const asyncHandler = require("express-async-handler");
const Course = require("../models/Course");

// @desc    Get courses
// @route   GET /api/courses
// @access  Private
const getCourses = asyncHandler(async (req, res) => {
    const courses = await Course.find().sort({ name: 1 });
    res.status(200).json(courses);
});

// @desc    add course
// @route   POST /api/courses
// @access  Private
const addCourse = asyncHandler(async (req, res) => {
    const course = await Course.create({
        teacher: req.user.id,
        name: req.body.name,
        intro: req.body.intro,
        description: req.body.description,
        goals: req.body.goals,
        bannerURL: req.body.bannerURL,
        promoURL: req.body.promoURL,
        duration: req.body.duration,
        difficulty: req.body.difficulty,
        categories: req.body.categories,
        tools_required: req.body.tools_required,
        tags: req.body.tags,
        lectures: req.body.lectures,
        students: [],
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

// @desc    Enroll to course
// @route   POST /api/courses/:id/enroll
// @access  Private
const enrollToCourse = asyncHandler(async (req, res) => {
    const course = await Course.findById(req.params.id);

    if (!course) {
        res.status(400);
        throw new Error("Course not found");
    }

    if (course.students.includes(req.user.id)) {
        res.status(400);
        throw new Error("Student already registered");
    }

    await course.students.push(req.user);
    course.save();

    res.status(200).json({ id: req.user.id });
});

module.exports = {
    getCourses,
    addCourse,
    getCourse,
    deleteCourse,
    updateCourse,
    enrollToCourse,
};
