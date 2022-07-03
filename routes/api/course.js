const express = require("express");
const router = express.Router();
const {
    getCourses,
    addCourse,
    getCourse,
    deleteCourse,
    updateCourse,
} = require("../../controllers/course");
const { protect, checkIfTeacher } = require("../../middleware/authMiddleware");

router.route("/").get(getCourses).post(protect, checkIfTeacher, addCourse);
router
    .route("/:id")
    .get(getCourse)
    .delete(protect, checkIfTeacher, deleteCourse)
    .put(protect, checkIfTeacher, updateCourse);

module.exports = router;
