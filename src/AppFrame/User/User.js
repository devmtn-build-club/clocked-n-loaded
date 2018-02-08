import React, { Component } from 'react'
import Header from './Header/Header';
import { Route, Switch } from 'react-router-dom'


class User extends Component {
    
    render(){
        return(
            <div>
                <Switch>
                    <Route path = '/' component = {Header}/>
                </Switch>
            </div>
        )
    }
}

export default User