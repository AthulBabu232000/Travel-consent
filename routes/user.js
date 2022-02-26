var express = require('express');
var router = express.Router();

const districts=[
"Alappuzha",
"Ernakulam",
"Idukki",
"Kannur",
"Kasaragod",
"Kollam",
"Kottayam",
"Kozhikode",
"Malappuram",
"Palakkad",
"Pathanamthitta",
"Thiruvananthapuram",
"Thrissur",
"Wayanad"
];
const occupation=[
  "government",
  "private",
  "dailybasis",
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('user/index', { title: 'Express' });
});


router.get('/consent', function(req, res, next) {
  res.render('user/consent', { title: 'Express', name:'Zainu' });
});
router.get('/register', function(req, res, next) {
  res.render('user/register', { title: 'Express', name:'Zainu' });
});

router.get('/user-details', function(req, res, next) {
  res.render('user/user-details', { title: 'Express',districts:districts,occupation:occupation });
});

module.exports = router;
