import React from 'react';
import { Redirect } from 'react-router';
import Navbar from '../components/navbar';
import SignIn from '../components/signInAndSignUp/SignIn';
import { apiUrl } from '../api/apiUrl';

const SignInPage = () => {

  const btnObject = {
    btnText: "Sign Up",
    btnLink: "/signup"
  };

  return (
    <>
      {sessionStorage.getItem("email") !== null ? (<Redirect to='/dashboard' />) : ''}
      {localStorage.getItem("email") !== null ? (<Redirect to='/dashboard' />) : ''}
      <Navbar {...btnObject} />
      <SignIn {...apiUrl} />
    </>
  );
};

export default SignInPage;
