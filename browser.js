/** @jsx React.DOM */

var React = require('react'),
  Router = require('react-router'),
  routes = require('./routes.jsx');

var main = document.getElementById('react-app');

Router.run(routes, Router.HistoryLocation, function(Handler, state) {
	React.render(<Handler />, main);
}); 