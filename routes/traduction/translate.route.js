const router = require('express').Router();
const {
  addTranslate,
  getTranslate,
} = require('../../controllers/traduction/translate.controller');

router.post('/', addTranslate);

router.get('/', (req, res) => {
  res.send('TR router');
});

module.exports = router;
