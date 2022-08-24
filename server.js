const path = require("path");
const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const { errorHandler } = require("./middleware/errorMiddleware");

const course = require("./routes/api/course");
const user = require("./routes/api/user");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// DB
const db = process.env.MONGO_URI;

mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected..."))
    .catch(err => console.log(err));

app.use("/api/users", user);
app.use("/api/courses", course);

// Serve frontend
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "./client/build")));

    app.get("*", (req, res) =>
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
    );
} else {
    app.get("/", (req, res) => res.send("Please set to production"));
}

app.use(errorHandler);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
