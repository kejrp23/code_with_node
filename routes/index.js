var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Surf Shop - Home' });
});

/* GET register page. */
router.get('/register', (req, res, next) => {
  res.send("Get /register");
});

/* post register page. */
router.post('/register', (req, res, next) => {
  res.send("post register");
});


/* GET login page. */
router.get('/login', (req, res, next) => {
  res.send("Get /login");
});

/* POST login page. */
router.post('/login', (req, res, next) => {
  res.send("Post /login");
});

/* GET profile page. */
router.get('/profile', (req, res, next) => {
  res.send("Get /profile");
});

/* Put profile/:user_id page. */
router.put('/profile/:user_id', (req, res, next) => {
  res.send("Put /profile");
});

/* GET forgot password page. */
router.get('/forgot', (req, res, next) => {
  res.send("Get /forgot-pw");
});

/* PUT forgot password page. */
router.put('/forgot', (req, res, next) => {
  res.send("PUT /forgot-pw");
});

/* GET reset-password page. */
router.get('/reset/:token', (req, res, next) => {
  res.send("Get /forgot-pw");
});

/* GET reset-password page. */
router.put('/reset/:token', (req, res, next) => {
  res.send("Get /forgot-pw");
});



module.exports = router;
