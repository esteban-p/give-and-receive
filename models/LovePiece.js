const { Schema, model } = require("mongoose");

const lovePieceSchema = new Schema({

  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  title: String,
  type: String,
  dateCreated: Date,
  stillValid: Boolean,
  description: String,
  coords: [],
  category: String,
  subCategory: String,
  tags: String
  
});

const LovePiece = model("LovePiece", lovePieceSchema);

module.exports = LovePiece;