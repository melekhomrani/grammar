const { addDe } = require('../../controllers/traduction/de.controller');
const router = require('express').Router();

router.post('/', addDe);

router.get('/', (req, res) => {
  res.send('De router');
});

module.exports = router;
