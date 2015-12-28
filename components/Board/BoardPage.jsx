/** @jsx React.DOM */

var React = require('react');

// Export the TestApp component
module.exports = BoardPage = React.createClass({

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
      <div className={'home-page'}>
        <img className={'home-page-icon'} src={'http://localhost:3000/images/terrace_icon.png'} />
        <div className={'home-page-title'}>Idea Board Shit</div>
      </div>
    )
  }

});
