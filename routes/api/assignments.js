const express = require("express");
const router = express.Router({ mergeParams: true });
const {
    getAssignments,
    addAssignment,
    getAssignment,
    updateAssignment,
    deleteAssignment,
} = require("../../controllers/assignment");
const {
    protect,
    checkIfTeacher,
    checkIfEnrolledOrOwner,
    checkIfStudent,
} = require("../../middleware/authMiddleware");

//  /api/courses/:id/assignments
router
    .route("/")
    .get(protect, checkIfEnrolledOrOwner, getAssignments)
    .post(protect, checkIfTeacher, checkIfEnrolledOrOwner, addAssignment);
router
    .route("/:assignmentId")
    .get(protect, checkIfEnrolledOrOwner, getAssignment)
    .delete(protect, checkIfTeacher, checkIfEnrolledOrOwner, deleteAssignment)
    .put(protect, checkIfTeacher, checkIfEnrolledOrOwner, updateAssignment);
router
    .route("/:assignmentId/submit")
    .post(protect, checkIfStudent, checkIfEnrolledOrOwner);

module.exports = router;
