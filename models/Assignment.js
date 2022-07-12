const mongoose = require("mongoose");

const ResourseSchema = new mongoose.Schema({
    url: String,
    filename: String,
});

const UploadSchema = new mongoose.Schema({
    url: String,
    filename: String,
});

const AssignmentSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Please add a title"],
        },
        resourses: [
            {
                url: String,
            },
        ],
        uploads: [
            {
                url: String,
                student: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "User",
                },
            },
        ],
        course: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Course",
            required: [true, "Course not specified"],
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Assignment", AssignmentSchema);
