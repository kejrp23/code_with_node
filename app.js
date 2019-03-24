const   express = require('express'),
        path = require('path'),
        cookieParser = require('cookie-parser'),
        logger = require('morgan'),
        indexRouter = require('./routes/index'),
        postsRouter = require('./routes/posts'),
        reviewsRouter = require('./routes/reviews'),
        usersRouter = require('./routes/users'),
        bodyParser = require("body-parser"),
        mongoose =require("mongoose");
     

const     app = express();

app.set("view engine", "ejs");
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use("/posts", postsRouter);
app.use('/posts/:id/reviews', reviewsRouter);
app.use('/users', usersRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next){
    const err = new Error("not found");
    err.status = 404;
    next(err);
});

//error handler
app.use(function(err, req, res, next){
    // set locals, only porviding error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') ==="development" ? err : {};
    //render the error page
    res.status(err.status || 500);
    res.render("error");
});



module.exports = app;

