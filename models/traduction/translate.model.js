const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const translate = new Schema({
  tr: [
    {
      language: {
        type: String,
        required: true,
      },
      id: {
        type: String,
        required: true,
      },
    },
  ],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Translate', translate);
