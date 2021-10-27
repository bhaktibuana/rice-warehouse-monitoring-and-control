import React, { useState, useEffect } from 'react';
import {
  Button,
  Card,
  CardA,
  CardContentLeft,
  CardContentRight,
  CardImage,
  CardImage2,
  Container,
  ContentWrapper,
  Form,
  FormH1,
  FormInputs,
  FormLabel,
  Input,
  SpanSignUp,
  SuccessH1,
  SuccessImg
} from './StyledElements';
import SignUpValidation from './SignUpValidation';
import Axios from 'axios';
import { Redirect } from 'react-router';

const SignUp = ({
  apiCheckUserEmail,
  apiSignUp
}) => {

  const [inputValue, setInputValue] = useState({
    name: '',
    email: '',
    password: '',
    passwordConf: ''
  });

  const [errors, setErrors] = useState({});
  const [checkEmail, setCheckEmail] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const [redirectLogin, setRedirectLogin] = useState(false);

  useEffect(() => {
    if (redirectLogin === false) {
      if (inputValue.email !== "") {
        Axios.get(apiCheckUserEmail + `/${inputValue.email}`).then((response) => {
          setCheckEmail(response.data.length);
        });
      }

      if (isSubmitting === true) {
        if (!errors.stats && checkEmail === 1) {
          setIsSubmitting(false);
          errors.email = 'Email is already taken';
        } else if (!errors.stats && checkEmail === 0) {
          Axios.post(apiSignUp, {
            usersName: inputValue.name,
            usersEmail: inputValue.email,
            usersPassword: inputValue.password
          }).then((response) => {
            if (response.status === 200) {
              asyncRedirect(response.status).then((result) => {
                result ? setRedirectLogin(true) : setRedirectLogin(false);
              });
              setFormSuccess(true);
            } else {
              setFormSuccess(false);
            }
          });
          setIsSubmitting(false);
        }
      }
    }
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setErrors(SignUpValidation(inputValue));
    setIsSubmitting(true);
  };

  const asyncRedirect = e => {
    return new Promise((resolve, reject) => {
      if (e === 200) {
        setTimeout(() => {
          resolve(true);
        }, 3000);
      }
    });
  };

  return (
    <>
      {redirectLogin ? (<Redirect to='/signin' />) : ''}
      <Container>
        <ContentWrapper>
          <Card>
            <CardContentLeft>
              <CardImage src={require('../../images/image-1.jpg').default} />
              <CardImage2 src={require('../../images/image-1.svg').default} />
            </CardContentLeft>

            {!formSuccess ? (
              <CardContentRight>
                <Form onSubmit={handleSubmit} noValidate>
                  <FormH1>
                    Let's create your account!
                  </FormH1>

                  <FormInputs>
                    <FormLabel>Name</FormLabel>
                    <Input
                      type='text'
                      name='name'
                      placeholder='Enter your full name'
                      value={inputValue.name}
                      onChange={handleChange}
                    />
                    {<p>{errors.name}</p>}
                  </FormInputs>

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
                    <FormLabel>Confirm Password</FormLabel>
                    <Input
                      type='password'
                      name='passwordConf'
                      placeholder='Confirm your password'
                      value={inputValue.passwordConf}
                      onChange={handleChange}
                    />
                    {<p>{errors.passwordConf}</p>}
                  </FormInputs>

                  <Button>Sign Up</Button>
                  <SpanSignUp>
                    Already have an account? <CardA to='/signin'>Login here</CardA>
                  </SpanSignUp>
                </Form>
              </CardContentRight>
            ) : (
              <CardContentRight>
                <SuccessH1>Your registration is successful! <br /> Please check your email to verify your account.</SuccessH1>
                <SuccessImg src={require('../../images/image-3.svg').default} />
              </CardContentRight>
            )}
          </Card>
        </ContentWrapper>
      </Container>
    </>
  );
};

export default SignUp;
