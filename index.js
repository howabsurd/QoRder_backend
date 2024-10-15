const express = require("express");
require("dotenv").config();
const router = require("./routes/index");  // Correct route import
const errorMiddleware = require("./middlewares/Error")

const app = express();

// Middleware (if any) can go here

app.use(express.json());  // Example of middleware for parsing JSON
app.use("/api", router)


const PORT = process.env.PORT || 3000;  // Fallback if .env is not set

app.listen(PORT, () => {
  console.log(`App is listening on ${PORT}`);
});

app.use(errorMiddleware)
