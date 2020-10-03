import React, { Component } from 'react';
import './App.css';
import SignIn from './components/SignIn';
import Dashboard from './components/Dashboard';
import List from './components/List';
import RoleToggle from './components/RoleToggle';
import Checkout from './components/Checkout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path='/login' component={SignIn} />
                    <Route exact path='/dashboard' component={Dashboard} />
                    <Route exact path='/list' component={List} />
                    <Route exact path='/home' component={RoleToggle} />
                    <Route exact path='/add' component={Checkout} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;