const De = require('../../models/traduction/de.model');

const addDe = async (req, res) => {
  const { text } = req.body;
  const de = new De({ sentence: text });
  await de.save();
  res.json({ message: 'De added successfully' });
};

module.exports = { addDe };
