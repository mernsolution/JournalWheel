const express = require("express");
// const Router = require("./Router/Router");
const cors = require("cors");
const helmet = require("helmet");
const hpp = require("hpp");
const xssClean = require("xss-clean");
const rateLimiter = require("express-rate-limit");

require("dotenv").config();

const app = new express();

app.use(helmet()); 
app.use(cors()); 
app.use(hpp());
app.use(xssClean());

const limiter = rateLimiter({
  windowMs: 15 * 60 * 1000,
  max: 1000,
  standardHeaders: true,
  legacyHeaders: false,
});

app.use(limiter);

// All backend API routes
// app.use("/v1",Router);

module.exports = app;
