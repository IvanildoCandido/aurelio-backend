const APIOneController = require('./controllers/APIOneController');
const APIThreeController = require('./controllers/APIThreeController');
const APITwoController = require('./controllers/APITwoController');

const router = require('express').Router();

router.post('/api/one', APIOneController.setUpper);
router.post('/api/two', APITwoController.arraySum);
router.post('/api/three', APIThreeController.uniqueValues);

module.exports = router;
