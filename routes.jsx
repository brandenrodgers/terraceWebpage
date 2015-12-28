/** @jsx React.DOM */

/** Use this to add new routes to the page
  * and tie them to components
  * Links to pages are handled in NavigationBar.jsx
 */

var React = require('react'),
  Router = require('react-router'),
  Route = Router.Route,
  DefaultRoute = Router.DefaultRoute;

// Components
var App = require('./components/App.jsx');
var Home = require('./components/Home/HomePage.jsx');
var About = require('./components/About/AboutPage.jsx');
var Board = require('./components/Board/BoardPage.jsx');

var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="homePage" path="/home" handler={Home}/>
    <Route name="boardPage" path="/board" handler={Board}/>
    <Route name="aboutPage" path="/about" handler={About}/>
    <DefaultRoute name="default" handler={Home}/>
  </Route>
);

module.exports = routes;