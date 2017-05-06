import React, {Component} from 'react';
import { BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

import Nav from './nav';
import Home from './home';
import Post from './post';
import Form from './form';


class Main extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <Router>
          <div>
            <Route exact path="/" component={Home}/>
            <Route path="/post" component={Post}/>
            <Route path="/add" component={Form}/>
          </div>
        </Router>
      </div>
    )
  }
}

export default Main;
