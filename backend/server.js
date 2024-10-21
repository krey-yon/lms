require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const Port = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: ["GET, POST, PUT, DELETE"],
    allowedHeaders: ["Content-Type, Authorization"],
  })
);
// Middleware
app.use(express.json());

//database connection
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });

//routes configuration

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).json({
    message: "Something went wrong",
    success: false,
  });
});

app.listen(Port, () => {
  console.log(`Server is now running on port http://localhost:${Port}`);
});
