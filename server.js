
// Require our dependencies

require('node-jsx').install({extension: '.jsx'});
var express = require('express'),
  exphbs = require('express-handlebars'),
  lessMiddleware = require('less-middleware'),
  path = require("path"),
  http = require('http'),
  mongoose = require('mongoose'),
  React = require('react'),
  Router = require('react-router'),
  Config = require('./config');

// Create an express instance and set a port variable
var app = express();
var port = Config.port || 3000;

// Components 
var routes = require('./routes.jsx');

// Set handlebars as the templating engine
app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Compile .less files to css
// Add debug: true if experiencing issues
app.use(lessMiddleware(path.join(__dirname, 'stylesheets'), {
  dest: path.join(__dirname, 'public'),
  preprocess: {
    path: function(pathname, req) {
      return pathname.replace(path.sep + 'css' + path.sep, path.sep);
    }
  }
}));

// Set /public as our static content dir
app.use("/", express.static(path.join(__dirname, 'public')));

// Disable etag headers on responses
app.disable('etag');

// Connect to our mongo database
//mongoose.connect('mongodb://localhost/react-tweets');

// Static routes
app.get('*', function (req, res) {
  Router.run(routes, req.path, function (Handler) {
    var markup = React.renderToString(React.createElement(Handler));
    res.render('home', {
      markup: markup,
      state: JSON.stringify({test:0})
    });
  });
})

// Start our server
var server = http.createServer(app).listen(port, function() {
  console.log('Express server listening on port ' + port);
});

module.exports = app;