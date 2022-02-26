var express = require('express');
var router = express.Router();

const consentUsers=[
  "Zainu",
  "Savi",
  "Sis",
  "Mahi",
  "Ray",
  "Me"
];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('admin/show-index', {title: 'Express', admin:true, consentUsers:consentUsers});
});
router.get('/show-user', function(req, res, next) {
  res.render('admin/show-user', {title: 'Express', admin:true, consentUsers:consentUsers});
});


module.exports = router;
