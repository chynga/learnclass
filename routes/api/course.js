const express = require("express");
const router = express.Router();
const {
    getCourses,
    addCourse,
    getCourse,
    deleteCourse,
    updateCourse,
    enrollToCourse,
} = require("../../controllers/course");
const {
    protect,
    checkIfTeacher,
    checkIfStudent,
} = require("../../middleware/authMiddleware");

const p = () => {
    console.log(1234);
};

router.route("/").get(getCourses).post(protect, checkIfTeacher, addCourse);
router
    .route("/:id")
    .get(getCourse)
    .delete(protect, checkIfTeacher, deleteCourse)
    .put(protect, checkIfTeacher, updateCourse);

router.route("/:id/enroll").post(protect, checkIfStudent, enrollToCourse);

module.exports = router;
