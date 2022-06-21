const { addFr } = require('../../controllers/traduction/fr.controller');
const router = require('express').Router();

router.post('/', addFr);

router.get('/', (req, res) => {
  res.send('FR router');
});

module.exports = router;
