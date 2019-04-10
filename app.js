//a lot of things in this file were taken from documentationa and customized or left alone.

const   express = require('express'),
        path = require('path'),
        cookieParser = require('cookie-parser'),
        logger = require('morgan'),
        indexRouter = require('./routes/index'),
        postsRouter = require('./routes/posts'),
        reviewsRouter = require('./routes/reviews'),
        usersRouter = require('./routes/users'),
        bodyParser = require("body-parser"),
        mongoose =require("mongoose"),
        passport = require("passport"),
        // passportLocalStrategy = require("passport-local-mongoose"),
        session = require("express-session"),
        User = require('./models/user'),
        app = express();





//connect to database
mongoose.connect('mongodb://localhost:27017/Surf_Shop', {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log("we're connected!");
});

app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// config sessions before passport
app.use(session({
  secret: 'hang ten dude',
  resave: false,
  saveUninitialized: true,
}));

//Config Passport and sessions

app.use(passport.initialize());
app.use(passport.session());

// CHANGE: USE "createStrategy" INSTEAD OF "authenticate"
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// mount routes
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

