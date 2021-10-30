import React from 'react';
import { Redirect } from 'react-router';
import Navbar from '../components/navbar';
import Profile from '../components/profile';
import Sidebar from '../components/sidebar';

const ProfilePage = () => {

  const redirectHandler = () => {
    if (localStorage.getItem("role") === null) {
      if (sessionStorage.getItem("role") === null) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  const sideBarObj = {
    sidebarObject: 'profile'
  }

  const navObj = {
    title1: 'Account Page',
    title2: 'Profile'
  }

  return (
    <>
      {redirectHandler() === true ? <Redirect to='/' /> : ''}
      <Profile />
      <Sidebar {...sideBarObj} />      
      <Navbar {...navObj} />
    </>
  );
};

export default ProfilePage;
