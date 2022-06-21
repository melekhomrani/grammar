const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const frSchema = new Schema({
  language: {
    type: String,
    default: 'fr',
  },
  sentence: {
    type: String,
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Fr', frSchema);
