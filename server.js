const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const courses = require("./routes/api/courses");

const app = express();

app.use(bodyParser.json());

// DB
const db = require("./config/keys").mongoURI;

mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected..."))
    .catch(err => console.log(err));

app.use("/api/courses", courses);

const port = process.env.PORT || 5001;

app.listen(port, () => console.log(`Server started on port ${port}`));
