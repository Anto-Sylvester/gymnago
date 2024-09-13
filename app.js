const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const rateLimit = require('express-rate-limit');
const app = express();
const user = require("./router/user");
const courseRouter = require("./router/courseRouter");

// cors
app.use(cors());

// convert everything to json
app.use(express.json());

//iWpXy3jCsYH4MoXh
mongoose.connect(`mongodb+srv://lenem83769:iWpXy3jCsYH4MoXh@cluster0.8bqsp.mongodb.net/test`)// useNewUrlParser is a deprecated option: useNewUrlParser has no effect since Node.js Driver version 4.0.0 and will be removed in the next major version

    .then(() => console.log("mongodb connected..."))
    .catch((err) => console.log(err));

const limiter = rateLimit({
    windowMs: 1 * 60 * 1000,
    max: 10,
    message: 'Too many requests, please try again later.'
});

app.use(limiter);

app.use("/api", user);
app.use("/api", courseRouter);

module.exports = app;
