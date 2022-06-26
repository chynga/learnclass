const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    teachers: [String],
    students: [String],
    materials: [String],
});

module.exports = Course = mongoose.model("course", CourseSchema);
