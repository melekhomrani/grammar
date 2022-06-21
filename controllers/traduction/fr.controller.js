const Fr = require('../../models/traduction/fr.model');

const addFr = async (req, res) => {
  const { text } = req.body;
  const fr = new Fr({ sentence: text });
  await fr.save();
  res.json({ message: 'Fr added successfully' });
};

module.exports = { addFr };
