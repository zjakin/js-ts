const mongoose = require('mongoose');

const { Schema } = mongoose;

const playerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: false,
  },
  phone: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Player', playerSchema);
