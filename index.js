var express = require('express');
var router = express.Router();

/* GET home page. */
//router.get('/', function(req, res, next) {
//  res.render('index', { title: 'Express' });
//});
// Примечание. Это наше первое использование метода ответа redirect () . Это перенаправляет на указанную страницу, по умолчанию отправляя код состояния HTTP «302 найдено». Вы можете изменить код состояния, возвращаемый при необходимости, и указать абсолютные или относительные пути.

// GET home page.
router.get('/', function(req, res) {
  res.redirect('/catalog');
});

module.exports = router;
