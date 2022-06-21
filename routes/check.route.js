const express = require('express');
const router = express.Router();

const { getChecks } = require('../controllers/check.controller');

router.get('/', getChecks);

module.exports = router;
