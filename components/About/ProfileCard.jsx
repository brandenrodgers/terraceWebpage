/** @jsx React.DOM */

var React = require('react');

// Export the TestApp component
module.exports = ProfileCard = React.createClass({

  // Set the initial component state
  getInitialState: function(props){

    props = props || this.props;

    // Set initial application state using props
    return {
      image: 'http://imgur.com/gallery/psfNQzP'
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
      <div className={'profile-card'}>
        <div className={'profile-card-name'}>{this.props.person.name}</div>
        <div className={'profile-card-info'}>
          <div className={'profile-card-image-wrapper'}>
            <div className={'profile-card-image'}>
              <img src='http://i.imgur.com/N8rOudd.jpg' />
            </div>
          </div>
          <div className={'profile-card-body-wrapper'}>
            <div className={'profile-card-body'}>Profile Card Info</div>
          </div>
        </div>
      </div>
    )
  }

});

