import React from 'react';
import { Redirect } from 'react-router';
import Dashboard from '../components/dashboard';

const DashboardPage = () => {

  const redirectHandler = () => {
    if (localStorage.getItem("role") === null) {
      if (sessionStorage.getItem("role") === null) {
        return true;
      } else {
        if (sessionStorage.getItem("role") === "visitor") {
          return true;
        } else {
          return false;
        }
      }
    } else {
      if (localStorage.getItem("role") === "visitor") {
        return true;
      } else {
        return false;
      }
    }
  }

  return (
    <>
      {redirectHandler() === true ? <Redirect to='/' /> : ''}
      <Dashboard />
    </>
  );
};

export default DashboardPage;
