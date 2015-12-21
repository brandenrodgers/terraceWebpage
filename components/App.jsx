var React = require('react');
var Router = require('react-router');
var Route = Router.Route, DefaultRoute = Router.DefaultRoute,
    RouteHandler = Router.RouteHandler, Link = Router.Link;

// Components
var NavBar = require('./NavBar.jsx');

module.exports = App = React.createClass({
  render: function () {
    return (
      <div>
        <section>
          <NavBar/>
          <RouteHandler/>
        </section>
      </div>
    );
  }
});
