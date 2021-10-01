const { Schema, model } = require("mongoose");

const conversationSchema = new Schema({

  startDate: Date,
  lovePiece: {
    type: Schema.Types.ObjectId,
    ref: 'LovePiece'
  },
  iniciator: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  counterpart: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  messages: [
    {
      timestamp: Date,
      sender: {
        type: Schema.Types.ObjectId,
        ref: 'User'
      },
      recipient: {
        type: Schema.Types.ObjectId,
        ref: 'User'
      },
      payload: String
    }
  ]
  
});

const Conversation = model("Conversation", conversationSchema);

module.exports = Conversation;  