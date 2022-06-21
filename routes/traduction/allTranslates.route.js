const router = require('express').Router();

const arRoute = require('./ar.route');
const deRoute = require('./de.route');
const enRoute = require('./en.route');
const esRoute = require('./es.route');
const frRoute = require('./fr.route');
const translateRoute = require('./translate.route');

router.use('/ar', arRoute);
router.use('/de', deRoute);
router.use('/en', enRoute);
router.use('/es', esRoute);
router.use('/fr', frRoute);
router.use('/tr', translateRoute);

module.exports = router;
