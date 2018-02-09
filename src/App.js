import React, { Component } from 'react';
import './App.css';
// import User from './AppFrame/User/User'
// import Admin from './AppFrame/Admin/Admin'
// import { Route, Switch } from 'react-router-dom'

import DevHeader from './DevHeader/DevHeader'
import DevRouter from './DevRouter/DevRouter'

class App extends Component {
  render() {
    return (
      <div className="App">
        <DevHeader/>
        <DevRouter/>
        {/* <Switch>
          <Route exact path = '/' component = {User}/>
          <Route path = '/admin' component = {Admin}/>
        </Switch> */}
      </div>
    );
  }
}

export default App;
