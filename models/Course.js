const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CourseSchema = new Schema(
    {
        teacher: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: "User",
        },
        name: {
            type: String,
            required: true,
        },
        intro: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        goals: [
            {
                goal: String,
            },
        ],
        bannerURL: {
            type: String,
        },
        promoURL: {
            type: String,
        },
        duration: {
            type: Number,
            required: true,
        },
        difficulty: {
            type: String,
            default: "beginner",
            enum: ["beginner", "intermediate", "professional"],
        },
        categories: [
            {
                type: String,
                enum: ["it", "business", "design", "health_and_fitness"],
            },
        ],
        tools_required: [
            {
                type: String,
            },
        ],
        tags: [
            {
                type: String,
            },
        ],
        lectures: [
            {
                title: String,
                description: String,
                videoURL: String,
            },
        ],
        students: [
            {
                type: Schema.Types.ObjectId,
                ref: "User",
            },
        ],
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Course", CourseSchema);
