/** @jsx React.DOM */

var React = require('react');

module.exports = PageHeader = React.createClass({

    render: function() {
      var self = this;

      return (
          <div className={'header-wrapper'}>
            <img className={'header-icon'} src={'http://localhost:3000/images/terrace_icon.png'} />
            <div className={'header-text-wrapper'}>
              <div className={'header-text'}>One Terrace</div>
            </div>
          </div>
      );
    }
});