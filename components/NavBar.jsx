/** @jsx React.DOM */

var React = require('react');
var Link = require('react-router').Link;

module.exports = NavigationBar = React.createClass({

    getInitialState: function(){
      return { focused: 0 };
    },

    render: function() {
      var self = this;

      return (
          <div className={'nav-bar'}>
              <nav>
                <ul className={'nav-list'}>
                  <li><Link to="homePage">Home</Link></li>
                  <li><Link to="aboutPage">About</Link></li> 
                </ul>
              </nav>
          </div>
      );
    }
});