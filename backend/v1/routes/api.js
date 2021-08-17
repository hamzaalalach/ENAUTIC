const router = require('express').Router();
const { getBatteriesSoc } = require('../controllers/batteries');
const { getSensorSpeeds } = require('../controllers/sonsors');

router.get('/battery/soc', getBatteriesSoc);
router.get('/sensor/speed', getSensorSpeeds);

module.exports = router;
