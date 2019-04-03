const express = require('express');
const router = express.Router({mergeParams: true}); //pulls the posts .id from app.js

/* GET post index /posts/:id/reviews */
router.get('/', (req, res, next) => {
  res.send("INDEX /posts/:id/reviews");
});

// THIS ROUTE IS BEING ELIMINATED DUE TO ALLOWING THE USER TO POST A REVIEW ON THE FROM THEY ARE ON. 
// /* GET review new posts/:id/reviews/new */
// router.get('/new', (req, res, next) => {
//   res.send("NEW /review/new");
// });

/* POST reviews create posts/:id/reviews */
router.post('/', (req, res, next) => {
  res.send("CREATE posts/:id/reviews");
});

/* GET review show post/:id/:review_id */
router.get('/review_id', (req, res, next) => {
  res.send("SHOW posts/:id/:review_id/");
});

/* GET review edit posts/:id/:review_id/edit */
router.get('/review_id/edit', (req, res, next) => {
  res.send("EDIT posts/:id/:review_id/edit");
});

/* PUT review update posts/:id/reviews/:review_id */
router.put('/:id', (req, res, next) => {
  res.send("UPDATE posts/:id/reviews/:review_id");
});

/* DELETE review destroy post/:id/reviews/:review_id */
router.delete('/:review_id', (req, res, next) => {
  res.send("DELETE posts/:id/reviews/review_id");
});


module.exports = router;