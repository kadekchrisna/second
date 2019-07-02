const router = require('express').Router();

const UserController = require('../controllers/UserController');

router.get('/', UserController.index);
router.get('/all', UserController.showAll);

module.exports = router;