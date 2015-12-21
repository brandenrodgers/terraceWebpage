/** @jsx React.DOM */

var React = require('react');

// Export the TestApp component
module.exports = HomePage = React.createClass({

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
       <div>Home Page</div>
    )
  }

});
