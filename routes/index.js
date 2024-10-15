const express = require("express"); // Correct path
const {newUser} = require("../controllers/index")
const router = express.Router();

router.get("/",newUser)

module.exports = router;
