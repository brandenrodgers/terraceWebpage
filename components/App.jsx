var React = require('react');
var Router = require('react-router');
var Route = Router.Route, DefaultRoute = Router.DefaultRoute,
    RouteHandler = Router.RouteHandler, Link = Router.Link;

// Components
var NavBar = require('./NavBar.jsx');
var PageHeader = require('./PageHeader.jsx');

module.exports = App = React.createClass({
  render: function () {

    var navItems = [
      {link: "homePage", text: "Home", pathName: "/home"},
      {link: "aboutPage", text: "About", pathName: "/about"}
    ];

    return (
      <div>
        <section>
          <div className={'page-top-wrapper'}>
            <div className={'page-top'}>
              <PageHeader/>
              <NavBar path={this.props.path} navItems={navItems} />
            </div>
          </div>
          <RouteHandler/>
        </section>
      </div>
    );
  }
});
