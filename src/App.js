import React, { Component } from 'react';
import './App.css';
import User from './AppFrame/User/User'
import Admin from './AppFrame/Admin/Admin'
import { Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path = '/' component = {User}/>
          <Route path = '/admin' component = {Admin}/>
        </Switch>
      </div>
    );
  }
}

export default App;
