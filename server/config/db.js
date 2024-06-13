const mongoose = require("mongoose");
require("dotenv").config();

const uri = process.env.MONGODB_URI;

async function connectDB() {
  try {
    await mongoose.connect(uri);
  } catch (err) {
    console.log("Error in connecting db", err);
    throw new Error("Error in connecting db", err);
  }
}

module.exports = connectDB;
