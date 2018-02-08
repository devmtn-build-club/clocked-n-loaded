import React, { Component } from 'react'
import AddRemoveUsers from './AddRemoveUsers/AddRemoveUsers';
import { Route, Switch } from 'react-router-dom'

class Admin extends Component {
    
    render(){
        return(
            <div>
                <Switch>
                    <Route path = '/admin/AddRemoveUsers' component = {AddRemoveUsers}/>
                </Switch>
            </div>
        )
    }
}

export default Admin