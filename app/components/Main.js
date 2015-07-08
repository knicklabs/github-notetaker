var React = require('react');
var RouteHandler = require('react-router').RouteHandler;
var SearchGithub = require('./SearchGithub');

var Main = React.createClass({
  render: function() {
    return (
      <div className="main-container">
        <nav className="navbar navbar-default" role="navigation">
          <div className="container">
            <div className="row" style={{marginTop: 15}}>
              <SearchGithub />
            </div>
          </div>
        </nav>
        <div className="container">
          <RouteHandler />
        </div>
      </div>
    )
  }
});

module.exports = Main;
