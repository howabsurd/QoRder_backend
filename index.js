const express = require("express");
require("dotenv").config();
const { router } = require("./routes/index");  // Correct route import

const app = express();

// Middleware (if any) can go here

app.use(express.json());  // Example of middleware for parsing JSON
app.use("/", router);     // Ensure you are using the router

const PORT = process.env.PORT || 3000;  // Fallback if .env is not set

app.get("/", (req,res)=>{
  return res.status(200).json("MZZAA AGYA")
})

app.listen(PORT, () => {
  console.log(`App is listening on ${PORT}`);
});
