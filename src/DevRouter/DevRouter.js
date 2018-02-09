import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';

// ↓ Component Imports Start ↓
import AddRemoveUsers from "../AppFrame/Admin/AddRemoveUsers/AddRemoveUsers";
import Header from "../AppFrame/User/Header/Header";
// ↑ Component Imports End ↑


class DevRouter extends Component{
    render(){
        return(
            <div>
                <Switch>
					<Route path="/dev/addremoveusers" component={AddRemoveUsers} />
					<Route path="/dev/header" component={Header} />
                </Switch>
            </div>
        )
    }
}

export default DevRouter;