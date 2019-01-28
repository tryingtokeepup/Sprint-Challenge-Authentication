import React, { Component } from 'react';
import './App.css';

// now going to borrow some code from some people i follow on github. need to learn how switch works.
//import {NavLink, Switch, Route, withRouter} from react-router-dom;
//import {Redirect} from 'react-router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Hey hey hey, buddy. Wanna see some dank dad jokes?</p>

          <p>
            ... don't care, will show anyway. login first though. only cool kids
            allowed.
          </p>
        </header>
      </div>
    );
  }
}

export default App;
