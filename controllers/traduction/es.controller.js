const Es = require('../../models/traduction/es.model');

const addEs = async (req, res) => {
  const { text } = req.body;
  const es = new Es({ sentence: text });
  await es.save();
  res.json({ message: 'Es added successfully' });
};

module.exports = { addEs };
