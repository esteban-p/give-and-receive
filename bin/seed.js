const mongoose = require("mongoose");
const LovePiece = require('../models/LovePiece');

const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/give-and-receive";

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

const lovepiecesToSeed = [
  {}
]