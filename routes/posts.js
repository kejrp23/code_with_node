const express = require('express'),
      router = express.Router(),
      { errorHandler } = require("../middleware/index"),
      { getPosts,newPost } = require("../controllers/posts");
     

/* GET post index /posts */
//even thought there is only a "/" it goes to the post route
router.get('/', errorHandler(getPosts));



/* GET posts new /posts/new */
router.get('/new', errorHandler(newPost));

/* POST posts create /posts */
router.post('/', (req, res, next) => {
  res.send("CREATE /posts");
});

/* GET posts show /posts/:id */
router.get('/:id', (req, res, next) => {
  res.send("SHOW /posts/:id");
});

/* GET posts edit /posts/:id/edit */
router.get('/:id/edit', (req, res, next) => {
  res.send("EDIT /posts/:id/edit");
});

/* PUT posts update /posts/:id */
router.put('/:id', (req, res, next) => {
  res.send("UPDATE /posts/:id");
});

/* DELETE posts destroy post/:id */
router.delete('/:id', (req, res, next) => {
  res.send("DELETE /posts/:id");
});


module.exports = router;





