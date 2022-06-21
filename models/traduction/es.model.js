const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const esSchema = new Schema({
  language: {
    type: String,
    default: 'es',
  },
  sentence: {
    type: String,
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Es', esSchema);
