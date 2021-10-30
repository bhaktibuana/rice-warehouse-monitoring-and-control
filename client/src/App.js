import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import DashboardPage from './pages/DashboardPage';
import LandingPage from './pages/LandingPage';
import ProfilePage from './pages/ProfilePage';
import DataPage from './pages/DataPage';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' component={LandingPage} exact />
          <Route path='/signin' component={SignInPage} exact />
          <Route path='/signup' component={SignUpPage} exact />
          <Route path='/dashboard' component={DashboardPage} exact />
          <Route path='/data' component={DataPage} exact />
          <Route path='/profile' component={ProfilePage} exact />
        </Switch>
      </Router>
    </>
  );
}

export default App;
