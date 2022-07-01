const express = require("express");
const router = express.Router();

const Course = require("../../models/Course");

router.get("/", (req, res) => {
    Course.find()
        .sort({ name: 1 })
        .then(course => res.json(course));
});

router.get("/:id", (req, res) => {
    Course.findById(req.params.id).then(course => res.json(course));
});

router.post("/", (req, res) => {
    const course = new Course({
        name: req.body.name,
        description: req.body.description,
    });

    course.save().then(course => res.json(course));
});

router.delete("/:id", (req, res) => {
    Course.findById(req.params.id)
        .then(course => course.remove().then(() => res.json({ success: true })))
        .catch(_ => res.status(404).json({ success: false }));
});

module.exports = router;
