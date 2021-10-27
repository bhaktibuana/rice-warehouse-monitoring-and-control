import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import DashboardPage from './pages/DashboardPage';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' component={LandingPage} exact />
          <Route path='/signin' component={SignInPage} exact />
          <Route path='/signup' component={SignUpPage} exact />
          <Route path='/dashboard' component={DashboardPage} exact />
        </Switch>
      </Router>
    </>
  );
}

export default App;
