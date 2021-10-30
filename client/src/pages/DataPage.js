import React from 'react';
import { Redirect } from 'react-router';
import Data from '../components/data';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';

const DataPage = () => {

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
    sidebarObject: 'data'
  }

  const navObj = {
    title1: 'Admin Page',
    title2: 'Data'
  }

  return (
    <>
      {redirectHandler() === true ? <Redirect to='/' /> : ''}
      <Data />
      <Sidebar {...sideBarObj} />
      <Navbar {...navObj} />
    </>
  );
};

export default DataPage;
