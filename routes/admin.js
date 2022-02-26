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

const userConsentDetails=[
  {
    id:12,
    name:consentUsers[0],
    occupation:'government',
    consent:'I just need to see what actually happen to the world and the real nature of mankind'
  },
  {
    id:13,
    name:consentUsers[1],
    occupation:'government',
    consent:'I just need to see what actually happen to the world and the real nature of mankind'
  },
  {
    id:14,
    name:consentUsers[2],
    occupation:'government',
    consent:'I just need to see what actually happen to the world and the real nature of mankind'
  },
  {
    id:15,
    name:consentUsers[3],
    occupation:'government',
    consent:'I just need to see what actually happen to the world and the real nature of mankind'
  },
]

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('admin/show-index', {title: 'Express', admin:true, consentUsers:consentUsers});
});
router.get('/show-user', function(req, res, next) {
  res.render('admin/show-user', {title: 'Express', admin:true, consentUsers:consentUsers});
});
router.get('/user-consent-details', function(req, res, next) {
  res.render('admin/user-consent-details', {title: 'Express', admin:true, consentUsers:consentUsers,userConsentDetails});
});


module.exports = router;
