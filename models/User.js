const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please add a name"],
        },
        email: {
            type: String,
            required: [true, "Please add an email"],
            unique: true,
        },
        password: {
            type: String,
            required: [true, "Please add a password"],
        },
        role: {
            type: String,
            default: "student",
            enum: ["student", "teacher"],
        },
    },
    {
        timestamps: true,
    }
);

module.exports = {
    User: mongoose.model("User", UserSchema),
    UserSchema,
};
