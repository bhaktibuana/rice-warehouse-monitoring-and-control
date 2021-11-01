import React from 'react';
import { Redirect } from 'react-router';
import { apiUrl } from '../api/apiUrl';
import Dashboard from '../components/dashboard';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';

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

  const sideBarObj = {
    sidebarObject: 'dashboard'
  }

  const navObj = {
    title1: 'Admin Page',
    title2: 'Dashboard'
  }

  return (
    <>
      {redirectHandler() === true ? <Redirect to='/' /> : ''}
      <Dashboard {...apiUrl} />
      <Sidebar {...sideBarObj} />
      <Navbar {...navObj} />
    </>
  );
};

export default DashboardPage;
