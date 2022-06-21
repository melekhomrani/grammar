const { addEs } = require('../../controllers/traduction/es.controller');
const router = require('express').Router();

router.post('/', addEs);

router.get('/', (req, res) => {
  res.send('ES router');
});

module.exports = router;
