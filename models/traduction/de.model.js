const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const deSchema = new Schema({
  language: {
    type: String,
    default: 'de',
  },
  sentence: {
    type: String,
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('De', deSchema);
