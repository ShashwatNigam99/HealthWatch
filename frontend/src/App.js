import React, { Component } from 'react';
import './App.css';
import SignIn from './components/SignIn';
import Dashboard from './components/Dashboard';
import List from './components/List';
import RoleToggle from './components/RoleToggle';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path='/login' component={SignIn} />
                    <Route exact path='/dashboard' component={Dashboard} />
                    <Route exact path='/list' component={List} />
                </Switch>
            </Router>
            <RoleToggle/>
        </div>
    );
}

export default App;