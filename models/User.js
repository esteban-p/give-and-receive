const { Schema, model } = require("mongoose");

const userSchema = new Schema({

  username: {
    type: String,
    required: true,
    unique: true
  },
  password: String,
  email: String,
  city: String,
  country: String,
  about: String,
  avatarUrl: String,
  favourites: []
  
});

const User = model("User", userSchema);

module.exports = User;
