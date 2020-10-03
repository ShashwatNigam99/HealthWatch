import React from 'react';
import logo from './logo.svg';
import './App.css';
import SignIn from './components/SignIn';
import Dashboard from './components/Dashboard';
import List from './components/List';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
function App() {
    return (
        <Router>
            <Switch>
                 <Route exact path='/login' component={SignIn} />
                 <Route exact path='/dashboard' component={Dashboard} />
                 <Route exact path='/list' component={List} />
            </Switch>
        </Router>
        
    );
}

export default App;