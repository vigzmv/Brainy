import React, {Component} from 'react';
class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="/"><b>Angel Hacks</b></a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav pull-right">
              <li>
                <a href="#"><b>About</b></a>
              </li>
              <li>
                <a href="/add"><b>Add New Post</b></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Nav;
