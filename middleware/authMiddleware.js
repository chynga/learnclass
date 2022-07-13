const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const { User } = require("../models/User");
const Course = require("../models/Course");

const protect = asyncHandler(async (req, res, next) => {
    let token;

    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {
        try {
            // Get token from header
            token = req.headers.authorization.split(" ")[1];

            // Verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // Get user from the token
            req.user = await User.findById(decoded.id).select("-password");

            next();
        } catch (error) {
            console.log(error);
            res.status(401);
            throw new Error("Not authorized");
        }
    }

    if (!token) {
        res.status(401);
        throw new Error("Not authorized, no token");
    }
});

const checkIfTeacher = asyncHandler(async (req, res, next) => {
    if (req.user.role === "teacher") {
        next();
    } else {
        res.status(444);
        throw new Error("Only teacher can do this operation!");
    }
});

const checkIfStudent = asyncHandler(async (req, res, next) => {
    if (req.user.role === "student") {
        next();
    } else {
        res.status(444);
        throw new Error("Only student can do this operation!");
    }
});

// Checks if student enrolled to the course or if the teacher created the course
const checkIfEnrolledOrOwner = asyncHandler(async (req, res, next) => {
    const course = await Course.findById(req.params.id);

    if (!course) {
        res.status(400);
        throw new Error("Course not found");
    }

    if (
        !course.students.includes(req.user.id) &&
        !course.teacher === req.user.id
    ) {
        res.status(444);
        throw new Error("Do not have access to that resourse!");
    }

    next();
});

module.exports = {
    protect,
    checkIfTeacher,
    checkIfStudent,
    checkIfEnrolledOrOwner,
};
