var React = require('react');
var Router = require('react-router');
var Route = Router.Route, DefaultRoute = Router.DefaultRoute,
    RouteHandler = Router.RouteHandler, Link = Router.Link;

// Components
var NavBar = require('./NavBar.jsx');
var PageHeader = require('./PageHeader.jsx');

module.exports = App = React.createClass({
  render: function () {
    return (
      <div>
        <section>
          <div className={'page-top-wrapper'}>
            <div className={'page-top'}>
              <PageHeader/>
              <NavBar/>
            </div>
          </div>
          <RouteHandler/>
        </section>
      </div>
    );
  }
});
