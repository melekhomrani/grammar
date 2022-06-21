const { addEn } = require('../../controllers/traduction/en.controller');
const router = require('express').Router();

router.post('/', addEn);

router.get('/', (req, res) => {
  res.send('EN router');
});

module.exports = router;
