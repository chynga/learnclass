const express = require("express");
const router = express.Router();
const {
    getCourses,
    addCourse,
    getCourse,
    deleteCourse,
    updateCourse,
} = require("../../controllers/courseController");

const Course = require("../../models/Course");

router.route("/").get(getCourses).post(addCourse);
router.route("/:id").get(getCourse).delete(deleteCourse).put(updateCourse);
// router.get("/", (req, res) => {
//     Course.find()
//         .sort({ name: 1 })
//         .then(course => res.status(200).json(course));
// });

// router.post("/", (req, res) => {
//     if (!req.body.name) {
//         res.status(400);
//         throw new Error("fields of item must be entered!");
//     }

//     const course = new Course({
//         name: req.body.name,
//         description: req.body.description,
//     });

//     course.save().then(course => res.status(200).json(course));
// });

// router.get("/:id", (req, res) => {
//     Course.findById(req.params.id).then(course => res.status(200).json(course));
// });

// router.delete("/:id", (req, res) => {
//     Course.findById(req.params.id)
//         .then(course =>
//             course.remove().then(() => res.status(200).json({ success: true }))
//         )
//         .catch(_ => res.status(404).json({ success: false }));
// });

module.exports = router;
