const express = require("express");
const router = express.Router();
const {
    getAssignments,
    addAssignment,
    getAssignment,
    updateAssignment,
    deleteAssignment,
} = require("../../controllers/assignment");
const { protect, checkIfTeacher } = require("../../middleware/authMiddleware");

router.route("/").get(getAssignments).post(addAssignment);
router
    .route("/:assignmentId")
    .get(getAssignment)
    .delete(deleteAssignment)
    .put(updateAssignment);
// router.route("/").get(getCourses).post(protect, checkIfTeacher, addCourse);
// router
//     .route("/:id")
//     .get(getCourse)
//     .delete(protect, checkIfTeacher, deleteCourse)
//     .put(protect, checkIfTeacher, updateCourse);

module.exports = router;
