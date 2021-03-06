var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title:  'Quiz', errors: [] });
});

//router.get('/quizes/question', quizController.question);
//router.get('/quizes/answer', quizController.answer);

//Autoload de comandos con :quizId
router.param('quizId', quizController.load); //autoload :quizId

//definición de rutas
router.get('/quizes', quizController.index);
router.get('/quizes/:quizId(\\d+)', quizController.show);
router.get('/quizes/:quizId(\\d+)/answer', quizController.answer);
router.get('/quizes/new', quizController.new);
router.post('/quizes/create', quizController.create);

router.get('/author', function(req, res) {
   res.render('author', {title: 'creditos' });
});

module.exports = router;


