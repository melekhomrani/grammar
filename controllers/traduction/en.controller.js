const En = require('../../models/traduction/en.model');

const addEn = async (req, res) => {
  const { text } = req.body;
  const en = new En({ sentence: text });
  await en.save();
  res.json({ message: 'En added successfully' });
};

module.exports = { addEn };
