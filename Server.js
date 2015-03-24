var http = require('http');
var express = require('express');
var mustacheExpress = require('mustache-express');
var bodyParser = require('body-parser');
var server = express();

server.engine('html', mustacheExpress());
server.set('view engine', 'html');
server.set('views', __dirname + '/views');
server.use(express.static(__dirname + '/public'));
server.use('/static', express.static(__dirname + '/public'));
server.use(bodyParser.urlencoded({ extended: false }));


// Routes
server.get('/periodic', function(req, res) {
	var view = {
    "Title": "Interwebz Periodic Table!",

    "product": [
      {   Name: "Phoronix",
          URL: "http://www.phoronix.com/scan.php?page=home",
          Element: "p",
      },
      {   Name: "Github",
          URL: "https://github.com/",
          Element: "g",
      },
      {   Name: "Y combinator",
          URL: "https://news.ycombinator.com/",
          Element: "y",
      },
      {   Name: "Facebook",
          URL: "https://wwww.facebook.com",
          Element: "f",
      }
      ]
  };
  var output = res.render("periodic.html", view);
});

// Testing
server.get('/test', function(req, res) {
	res.send('working!=D')
});

// Get
server.get('/struc', function(req, res) {
	res.render("structure.html");
});

// Post
server.post('/struc', function(req, res) {
	var userName = req.body.userName;
	var html = 'userName: ' + req.body.userName + '.<br>' +
	'email: ' + req.body.email + '.<br>' +
	'url: ' + req.body.url;
	res.send(html);
});

server.listen(process.env.PORT || 1337);
