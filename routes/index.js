const express = require('express');
const router = express.Router();
//section 5 video 18) alittle confusing what is happening here. 
const   {postRegister, postLogin, getLogout} = require("../controllers");
const   {errorHandler} = require("../middleware");

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Surf Shop - Home' });
}); 
/* GET register page. */
router.get('/register', (req, res, next) => {
  res.send("Get /register");
});

/* post register page. */
router.post('/register', errorHandler(postRegister));

 
router.get('/login', (req, res, next) => {
  res.send("Get /login");
});

/* POST login page. */
router.post("/login", postLogin);

/* POST LOGOUT */
router.get('/logout', getLogout);


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

/* GET reset/:token page. */
router.get('/reset/:token', (req, res, next) => {
  res.send("Get /forgot-pw");
});

/* put reset/:token page. */
router.put('/reset/:token', (req, res, next) => {
  res.send("Get /forgot-pw");
});



module.exports = router;
