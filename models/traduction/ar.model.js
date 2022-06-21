const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const arSchema = new Schema({
  language: {
    type: String,
    default: 'ar',
  },
  sentence: {
    type: String,
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Ar', arSchema);
