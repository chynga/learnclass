const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const { errorHandler } = require("./middleware/errorMiddleware");

const course = require("./routes/api/course");
const user = require("./routes/api/user");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// const secret = process.env.SECRET || "thisshouldbeabettersecret!";

// const sessionConfig = {
//     name: "session",
//     secret,
//     resave: false,
//     saveUninitialized: true,
//     cookie: {
//         httpOnly: true,
//         // secure: true,
//         expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
//         maxAge: 1000 * 60 * 60 * 24 * 7,
//     },
// };

// app.use(session(sessionConfig));

// app.use(passport.initialize());
// app.use(passport.session());
// passport.use(new LocalStrategy(User.authenticate()));

// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

// DB
const db = process.env.MONGO_URI;

mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected..."))
    .catch(err => console.log(err));

app.use("/api/courses", course);
app.use("/api/users", user);

app.use(errorHandler);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
