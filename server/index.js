const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const router = require("./routes")

require("dotenv").config;

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', router)

const port = process.env.PORT || 8080;

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`server is ruing on ${port} port`);
      console.log("Database connected successfully");
    });
  })
  .catch((err) => console.error("Database connection error:", err));
