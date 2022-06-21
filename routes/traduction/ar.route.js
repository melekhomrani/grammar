const { addAr } = require('../../controllers/traduction/ar.controller');
const router = require('express').Router();

router.post('/', addAr);

router.get('/', (req, res) => {
  res.send('AR router');
});

module.exports = router;
