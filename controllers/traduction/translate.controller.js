const Translate = require('../../models/traduction/translate.model');
const Ar = require('../../models/traduction/ar.model');
const De = require('../../models/traduction/de.model');
const En = require('../../models/traduction/en.model');
const Es = require('../../models/traduction/es.model');
const Fr = require('../../models/traduction/fr.model');

const addTranslate = async (req, res) => {
  const { fr, ar, en, es, de } = req.body;
  const translate = new Translate({ tr: [fr, ar, en, es, de] });
  await translate.save();
  res.json({ message: 'Translate added successfully' });
};

module.exports = { addTranslate };
