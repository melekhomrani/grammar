const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const enSchema = new Schema({
  language: {
    type: String,
    default: 'en',
  },
  sentence: {
    type: String,
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('En', enSchema);
