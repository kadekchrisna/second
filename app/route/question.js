const router = require('express').Router();

const QuestionController = require('../controllers/QuestionController');

router.get('/', QuestionController.index);
router.get('/all', QuestionController.showAllQuestion);

module.exports = router;