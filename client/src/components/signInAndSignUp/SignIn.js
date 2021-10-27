import React, { useState, useEffect } from 'react';
import {
  Alert,
  Button,
  Card,
  CardA,
  CardContentLeft,
  CardContentRight,
  CardImage,
  CardImage2,
  Checkbox,
  Container,
  ContentWrapper,
  Form,
  FormH1,
  FormInputs,
  FormLabel,
  Input,
  SpanSignUp,
  SuccessH1
} from './StyledElements';
import SignInValidation from './SignInValidation';
import Axios from 'axios';
import { RingLoader } from 'react-spinners';
import { css } from "@emotion/react";
import { Redirect } from 'react-router';

const SignIn = ({
  apiSignIn,
  apiUserAuth
}) => {

  const [inputValue, setInputValue] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [authMessage, setAuthMessage] = useState('');
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [refreshPage, setRefreshPage] = useState(false);
  const [isCheckbox, setIsCheckbox] = useState();

  useEffect(() => {
    if (isSubmitting === true) {
      if (!errors.stats) {
        Axios.post(apiSignIn, {
          usersEmail: inputValue.email,
          usersPassword: inputValue.password
        }).then((response) => {
          if (response.data.auth === true) {
            sessionStorage.setItem("token", response.data.token);
            setIsAuthenticating(true);
            setShowAlert(false);
            setIsSubmitting(false);
          } else {
            setAuthMessage(response.data.message);
            setShowAlert(true);
            setIsSubmitting(false);
          }
        });

      }
    }

    if (isAuthenticating === true) {
      userAuthentication().then((result) => {
        if (result) {
          setIsAuthenticating(false);
        }
      });
    }
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setErrors(SignInValidation(inputValue));
    setIsSubmitting(true);
  };

  const alertHandler = () => {
    setShowAlert(false);
  };

  const userAuthentication = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        Axios.get(apiUserAuth, {
          headers: {
            "x-access-token": sessionStorage.getItem("token")
          }
        }).then((response) => {
          if (isCheckbox !== undefined) {
            localStorage.setItem("name", response.data.users_name);
            localStorage.setItem("email", response.data.users_email);
            localStorage.setItem("role", response.data.users_role);
            localStorage.setItem("token", sessionStorage.getItem("token"));
            sessionStorage.setItem("name", response.data.users_name);
            sessionStorage.setItem("email", response.data.users_email);
            sessionStorage.setItem("role", response.data.users_role);
            setRefreshPage(true);
          } else {
            sessionStorage.setItem("name", response.data.users_name);
            sessionStorage.setItem("email", response.data.users_email);
            sessionStorage.setItem("role", response.data.users_role);
            setRefreshPage(true);
          }
        });
        resolve(true);
      }, 2000);
    });
  };

  const spinnerStyle = css`
    background: transparent;
    display: block;
    margin: 80px auto;
  `;

  return (
    <>
      {refreshPage ? (<Redirect to='/signin' />) : ''}
      <Container>
        <ContentWrapper>
          <Card>
            <CardContentLeft>
              <CardImage src={require('../../images/image-2.jpg').default} />
              <CardImage2 src={require('../../images/image-2.svg').default} />
            </CardContentLeft>

            {!isAuthenticating ? (
              <CardContentRight>
                <Form onSubmit={handleSubmit} noValidate>
                  <FormH1>
                    Hi there, let's login into your account!
                  </FormH1>
                  <br />
                  <FormInputs>
                    <FormLabel>Email</FormLabel>
                    <Input
                      type='email'
                      name='email'
                      placeholder='Enter your email'
                      value={inputValue.email}
                      onChange={handleChange}
                    />
                    {<p>{errors.email}</p>}
                  </FormInputs>

                  <FormInputs>
                    <FormLabel>Password</FormLabel>
                    <Input
                      type='password'
                      name='password'
                      placeholder='Enter your password'
                      value={inputValue.password}
                      onChange={handleChange}
                    />
                    {<p>{errors.password}</p>}
                  </FormInputs>

                  <FormInputs>
                    <Checkbox type='checkbox' onChange={(e) => {
                      setIsCheckbox(e.target.value);
                    }} />
                    <FormLabel>Remember me </FormLabel>
                  </FormInputs>

                  {!showAlert ? (<br />) : (
                    <FormInputs>
                      <Alert>
                        <span onClick={alertHandler}>&times;</span>
                        <strong>Login failed! </strong>
                        {authMessage}
                      </Alert>
                    </FormInputs>
                  )}

                  <Button>Sign In</Button>
                  <SpanSignUp>
                    Don't have account yet? <CardA to='/signup'>Register here</CardA>
                  </SpanSignUp>
                </Form>
              </CardContentRight>
            ) : (
              <CardContentRight>
                <br />
                <SuccessH1>Authenticate . . .</SuccessH1>
                <RingLoader size={110} color='#ffcd5d' css={spinnerStyle} loading={true} />
              </CardContentRight>
            )}
          </Card>
        </ContentWrapper>
      </Container>
    </>
  );
};

export default SignIn;
