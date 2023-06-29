const express = require('express');

// middlewares installed
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();

// using middlewares
app.use(cookieParser());
app.use(session({
    secret: "pk@#176",
    resave: true,
    saveUninitialized: true
}));

// setting cookies
app.get('/', function(req, res){
    res.cookie('name', 'express cookies').send('cookie set'); // sets cookie name = express cookies
    console.log('Cookies: ', req.cookies);
 });

 // for viewing cookies in chrome console type console.log(document.cookie); in console

 // cookies with expiration time
 app.get('/expire', function(req, res){
    res.cookie('name2', 'cookie with expiration time', {maxAge: 10600}).send('new cookie set'); // this cookie will be deleted after 10600 ms
 });

 // cookies deletion
 app.get('/clear_cookies', function(req, res){
    res.clearCookie('name'); // cookie with property name will be deleted
    res.send('cookies cleared');
 });

// express-session
 app.get('/session', function(req, res){
    if(req.session.page_views){
       req.session.page_views++;
       res.send("You visited this page " + req.session.page_views + " times");
    } else {
       req.session.page_views = 1;
       res.send("Welcome to this page for the first time!");
    }
 });
 
 app.listen(3000);