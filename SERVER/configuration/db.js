const mongoose = require('mongoose')
require('dotenv').config()

const connectDB = async () => {
  try {
    const MONGO_URI = "mongodb+srv://TsiMongoDbUser:0pbVu85cgRHk6SlD@cluster0.exebe2n.mongodb.net/";
    await mongoose.connect(MONGO_URI);
    console.log('MongoDB connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;