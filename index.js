const express = require("express");
require("dotenv").config();
const router = require("./routes/index");  // Correct route import
const errorMiddleware = require("./middlewares/Error")
const { Sequelize } = require('sequelize');

const app = express();

// Middleware (if any) can go here
app.use((req, res, next) => {
  console.log("Req Path:", req.path);
  console.log("Req Method: ", req.method)
  next();
});

app.use(express.json());  // Example of middleware for parsing JSON
app.use("/api", router)

const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USERNAME, process.env.DATABASE_PASSWORD, {
  host: process.env.DATABASE_HOST,
  dialect: process.env.DATABASE_DIALECT,
});

// Test database connection
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


const PORT = process.env.PORT || 3000; 

app.listen(PORT, () => {
  console.log(`App is listening on ${PORT}`);
});



app.use(errorMiddleware)
