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
              <img src={this.props.person.image} />
            </div>
          </div>
          <div className={'profile-card-body-wrapper'}>
            <div className={'profile-card-body'}>
              <div>Major: {this.props.person.major}</div>
              <div>Age: {this.props.person.age}</div>
              <div>Website: {this.props.person.website}</div>
              <div>LinkedIn:<a href={this.props.person.linkedin}> {this.props.person.linkedin}</a></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

});

