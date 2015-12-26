/** @jsx React.DOM */

var React = require('react');
var Link = require('react-router').Link;

module.exports = NavigationBar = React.createClass({

    getInitialState: function(){
      return { 
        navItems: this.props.navItems,
        currentPath: this.props.path
      };
    },

    onClick: function(newPath) {
      this.setState({
        navItems: this.state.navItems,
        currentPath: newPath
      });
    },

    componentDidMount: function() {
      this.setState({ 
        navItems: this.props.navItems,
        currentPath: this.props.path
      });
    },

    render: function() {
      var self = this;

      return (
          <div className={'nav-bar'}>
              <nav>
                <ul className={'nav-list'}> { this.state.navItems.map(function(item, index){
                  var path = item.pathName;
                  var classType = (this.state.currentPath == item.pathName) ? 'nav-list-item-selected ' : '';
                  return <li className={classType + 'nav-list-item'} key={path}>
                           <Link to={item.link} onClick={this.onClick.bind(this, path)}>{item.text}</Link>
                         </li>
                  }.bind(this)) }
                </ul>
              </nav>
          </div>
      );
    }
});