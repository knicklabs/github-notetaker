import React from 'react';
import { RouteHandler } from 'react-router';
import SearchGithub from './SearchGithub';

class Main extends React.Component {
  render() {
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
          <RouteHandler {...this.props} />
        </div>
      </div>
    )
  }
}

export default Main;
