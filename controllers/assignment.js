const asyncHandler = require("express-async-handler");
const Assignment = require("../models/Assignment");

// @desc    Get assignments
// @route   GET /api/courses/:id/assignments
// @access  Private
const getAssignments = asyncHandler(async (req, res) => {
    const assignments = await Assignment.find({ course: req.params.id }).sort({
        createdAt: 1,
    });

    res.status(200).json(assignments);
});

// @desc    add assignment
// @route   POST /api/courses/:id/assignments
// @access  Private
const addAssignment = asyncHandler(async (req, res) => {
    const assignment = await Assignment.create({
        title: req.body.title,
        description: req.body.description,
        resourses: req.body.resourses,
        course: req.params.id,
    });

    res.status(200).json(assignment);
});

// @desc    get assignment
// @route   GET /api/courses/:id/assignments/:assignmentId
// @access  Private
const getAssignment = asyncHandler(async (req, res) => {
    const assignment = await Assignment.findById(req.params.assignmentId);
    res.status(200).json(assignment);
});

// @desc    Update assignment
// @route   PUT /api/courses/:id/assignments/:assignmentId
// @access  Private
const updateAssignment = asyncHandler(async (req, res) => {
    const assignment = await Assignment.findById(req.params.assignmentId);

    if (!assignment) {
        res.status(400);
        throw new Error("Assignment not found");
    }

    const updatedAssignment = await Assignment.findByIdAndUpdate(
        req.params.assignmentId,
        req.body,
        {
            new: true,
        }
    );

    res.status(200).json(updatedAssignment);
});

// @desc    Delete assignments
// @route   DELETE /api/courses/:id/assignments/:assignmentId
// @access  Private
const deleteAssignment = asyncHandler(async (req, res) => {
    const assignment = await Assignment.findById(req.params.assignmentId);

    if (!assignment) {
        res.status(400);
        throw new Error("Course not found");
    }

    await assignment.remove();

    res.status(200).json({ id: req.params.assignmentId });
});

module.exports = {
    getAssignments,
    addAssignment,
    getAssignment,
    updateAssignment,
    deleteAssignment,
};
