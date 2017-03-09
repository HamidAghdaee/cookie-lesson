var express = require('express');
//var cookieSession = require('cookie-session')

var app = express();
var cookieParser = require('cookie-parser')
app.use(cookieParser())

app.get('/', function(req, res) {
  console.log('Cookies: ', req.cookies)
})

app.get('/cookie', function(req,res){

  // check if the cookie exists already
  const views = req.cookies.views ? parseInt(req.cookies.views) + 1 : 1;
  res.cookie('views', views);

  res.end('<h1>I\'ve visited this page ' + views + 'times!</h1>');
});

app.get('/check-cookie', function(req, res) {
  let response = "I don't have a cookie";

  if (req.cookies.views) {
    response = "I do have a cookie";
  }

  res.send(response);
})


app.get('/reset', function(req, res){

  // delete the cookie
  res.clearCookie('views')

  res.end('<h1>Counter Reset</h1><a href="/cookie">Start Counting Again!</a>');
});

app.listen(8080);
