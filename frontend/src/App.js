import React, { Component } from 'react';
import './App.css';
import SignIn from './components/SignIn';
import Dashboard from './components/Dashboard';
import List from './components/List';
import Home from './components/Home';
import Checkout from './components/Checkout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/login' component={SignIn} />
                    <Route exact path='/dashboard' component={Dashboard} />
                    <Route exact path='/list' component={List} />
                    <Route exact path='/add' component={Checkout} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;