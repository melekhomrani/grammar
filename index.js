const express = require('express');
const morgan = require('morgan');
const LanguageToolApi = require('language-grammar-api');

require('dotenv').config();

const options = {
  endpoint: 'https://languagetool.org/api/v2',
};

const languageToolClient = new LanguageToolApi(options);

(async function test() {
  const languages = await languageToolClient.languages();
  const result = await languageToolClient.check({
    text: "I'm a little teapot",
    language: 'en-US',
  });
  const { matches } = result;

  console.log(matches);
})();

const app = express();

app.use(morgan('tiny'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/', (req, res) => {
  console.log(req.body);
  res.end();
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
