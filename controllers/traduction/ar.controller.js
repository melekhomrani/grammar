const Ar = require('../../models/traduction/ar.model');
const Translate = require('../../models/traduction/translate.model');

const addAr = async (req, res) => {
  const { text } = req.body;
  const ar = new Ar({ sentence: text });
  await ar.save();
  res.json({ message: 'Ar added successfully' });
};

module.exports = { addAr };
