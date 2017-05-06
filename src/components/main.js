import React, {Component} from 'react';
import Nav from './nav';
import Home from './home';
import Post from './post';

class Main extends Component {
  // constructor() { this.state = {
  //
  // } }

  render() {
    return (
      <div>
        <Nav/>
        <Post/>
      </div>
    )
  }
}

export default Main;
