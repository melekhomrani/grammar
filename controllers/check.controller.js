const LanguageToolApi = require('language-grammar-api');

require('dotenv').config();

const options = {
  endpoint: process.env.LANGUAGE_GRAMMAR_API_ENDPOINT,
};
const languageToolClient = new LanguageToolApi(options);
const languages = languageToolClient.languages();

async function getChecks(req, res) {
  const result = await languageToolClient.check({
    text: req.body.text,
    language: req.body.language,
  });
  const { matches } = result;
  console.log(matches);
  res.json(matches);
}

module.exports = {
  getChecks,
};
