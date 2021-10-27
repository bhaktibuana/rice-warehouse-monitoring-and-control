import React from 'react';
import { Redirect } from 'react-router';
import Navbar from '../components/navbar';
import SignUp from '../components/signInAndSignUp/SignUp';
import { apiUrl } from '../api/apiUrl';

const SignUpPage = () => {

  const btnObject = {
    btnText: "Sign In",
    btnLink: "/signin"
  };

  return (
    <>
      {sessionStorage.getItem("email") !== null ? (<Redirect to='/dashboard' />) : ''}
      {localStorage.getItem("email") !== null ? (<Redirect to='/dashboard' />) : ''}
      <Navbar {...btnObject} />
      <SignUp {...apiUrl} />
    </>
  );
};

export default SignUpPage;
