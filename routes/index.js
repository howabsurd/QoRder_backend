const express = require("express");
const { myFirstFunction } = require("../controllers");  // Correct path

const router = express.Router();

router.get("/api", myFirstFunction);  // Routing to your controller

module.exports = { router };
