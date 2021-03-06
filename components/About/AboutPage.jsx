/** @jsx React.DOM */

var React = require('react');
var Config = require('../../Config');

// Components
var ProfileCard = require('./ProfileCard.jsx');

// Export the TestApp component
module.exports = AboutPage = React.createClass({

  // Set the initial component state
  getInitialState: function(props){

    props = props || this.props;

    // Set initial application state using props
    return {
      count: 0
    };

  },

  componentWillReceiveProps: function(newProps, oldProps){
    this.setState(this.getInitialState(newProps));
  },

  // Called directly after component rendering, only on client
  componentDidMount: function(){

    // Preserve self reference
    var self = this;

  },

  // Render the component
  render: function(){

    return (
      <div className={'about-page'}>
        <div className={'about-page-title'}>About Us</div>
        <div className={'about-page-content'}> { Config.people.map(function(person, index){
          var key = person.id;
          return <ProfileCard key={key} person={person}/>;
        }) }
        </div>
      </div>
    )
  }

});
