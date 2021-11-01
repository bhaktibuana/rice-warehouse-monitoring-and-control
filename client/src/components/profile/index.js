import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Redirect } from 'react-router';
import {
  ApplyIcon,
  BioContainer,
  BioContent,
  BtnContainer,
  CancelIcon,
  CardItem,
  CardItemContainer,
  CardTitle,
  Container,
  Content,
  ContentImg,
  EditIcon,
  EmailText,
  InputContent,
  ItemBtnApply,
  ItemBtnCancel,
  ItemBtnEdit,
  ItemCard,
  ItemContainer,
  ItemText,
  NameText,
  Page,
  ProfileImg,
  ProfileText,
  TextContent,
  TextLabel,
  TitleText,
  ValidateText
} from './ProfileStyled';

const Profile = ({
  apiUpdateName,
  apiUpdatePassword,
  apiApplyEmployee,
  apiGetRole
}) => {

  const [nameEdit, setNameEdit] = useState(false);
  const [passwordEdit, setPasswordEdit] = useState(false);
  const [newName, setNewName] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [validate, setValidate] = useState('');
  const [redirect, setRedirect] = useState(false);
  const [userRole, setUserRole] = useState(localStorage.getItem("role") === null ? sessionStorage.getItem("role") : localStorage.getItem("role"));
  const [getState1, setGetState1] = useState(true);
  const [getState2, setGetState2] = useState(false);
  const [applyOnClick, setApplyOnClick] = useState(false);


  useEffect(() => {
    if (userRole === 'visitor') {
      if (getState1) {
        Axios.post(apiGetRole, {
          usersEmail: localStorage.getItem("email") === null ? sessionStorage.getItem("email") : localStorage.getItem("email")
        }).then((result) => {
          if (localStorage.getItem("role") === null) {
            sessionStorage.setItem("role", result.data[0].users_role);
          } else {
            sessionStorage.setItem("role", result.data[0].users_role);
            localStorage.setItem("role", result.data[0].users_role);
          }
          setUserRole(localStorage.getItem("role") === null ? sessionStorage.getItem("role") : localStorage.getItem("role"));
          setGetState1(!getState1);
          setGetState2(!getState2);
        });
      }

      if (getState2) {
        Axios.post(apiGetRole, {
          usersEmail: localStorage.getItem("email") === null ? sessionStorage.getItem("email") : localStorage.getItem("email")
        }).then((result) => {
          if (localStorage.getItem("role") === null) {
            sessionStorage.setItem("role", result.data[0].users_role);
          } else {
            sessionStorage.setItem("role", result.data[0].users_role);
            localStorage.setItem("role", result.data[0].users_role);
          }
          setUserRole(localStorage.getItem("role") === null ? sessionStorage.getItem("role") : localStorage.getItem("role"));
          setGetState1(!getState1);
          setGetState2(!getState2);
        });
      }
    }
  });

  const nameEditHandler = () => {
    setNameEdit(!nameEdit);
  };

  const passwordEditHandler = () => {
    setPasswordEdit(!passwordEdit);
    setValidate('');
  };

  const updateNameHandler = () => {
    Axios.put(apiUpdateName, {
      usersEmail: localStorage.getItem("email") === null ? sessionStorage.getItem("email") : localStorage.getItem("email"),
      usersName: newName
    }).then((result) => {
      if (result.status === 200) {
        if (localStorage.getItem("name") === null) {
          sessionStorage.setItem("name", newName);
        } else {
          sessionStorage.setItem("name", newName);
          localStorage.setItem("name", newName);
        }
        setNameEdit(!nameEdit);
      }
    });
  };

  const updatePasswordHandler = () => {
    if (newPassword.length < 8) {
      setValidate('Password needs to be 8 characters or more');
    } else {
      Axios.put(apiUpdatePassword, {
        usersEmail: localStorage.getItem("email") === null ? sessionStorage.getItem("email") : localStorage.getItem("email"),
        usersPassword: newPassword
      }).then((result) => {
        if (result.status === 200) {
          setValidate('');
          setPasswordEdit(!passwordEdit);
          localStorage.clear();
          sessionStorage.clear();
          setRedirect(true);
        }
      });
    }
  };

  const applyStatusHandler = () => {
    Axios.post(apiApplyEmployee, {
      usersEmail: localStorage.getItem("email") === null ? sessionStorage.getItem("email") : localStorage.getItem("email"),
      usersName: localStorage.getItem("name") === null ? sessionStorage.getItem("name") : localStorage.getItem("name")
    }).then((result) => {
      applyOnClickHandler();
    });
  };

  const roleStatusObj = {
    visitor: 'You are currently a visitor. That means you dont have full access here. Please apply for being an employee to get full access.',
    employee: 'You are an employee.',
    supervisor: 'You are a supervisor.'
  };

  const applyOnClickHandler = () => {
    setApplyOnClick(true);
  };

  return (
    <>
      {redirect ? (<Redirect to='/signin' />) : ''}
      <Page>
        <Container>
          <Content>
            <ContentImg src={require('../../images/image-3.jpg').default} />

            <BioContainer>
              <BioContent>
                <ProfileImg src={require('../../images/profile.png').default} />

                <ProfileText>
                  <NameText>{localStorage.getItem("name") === null ? sessionStorage.getItem("name") : localStorage.getItem("name")}</NameText>
                  <EmailText>{localStorage.getItem("email") === null ? sessionStorage.getItem("email") : localStorage.getItem("email")}</EmailText>
                </ProfileText>
              </BioContent>
            </BioContainer>

            <ItemContainer>
              <ItemCard>
                <CardTitle>
                  <TitleText>Profile Information</TitleText>
                </CardTitle>

                <CardItemContainer>
                  {!nameEdit ? (
                    <CardItem>
                      <ItemText>
                        <TextLabel>Name</TextLabel>
                        <TextContent>{localStorage.getItem("name") === null ? sessionStorage.getItem("name") : localStorage.getItem("name")}</TextContent>
                      </ItemText>
                      <ItemText>
                        <BtnContainer>
                          <ItemBtnEdit onClick={nameEditHandler}>
                            <EditIcon />
                            Change
                          </ItemBtnEdit>
                        </BtnContainer>
                      </ItemText>
                    </CardItem>
                  ) : (
                    <CardItem>
                      <ItemText>
                        <TextLabel>Name</TextLabel>
                        <InputContent type='text' placeholder='Enter your name' onChange={(e) => {
                          setNewName(e.target.value);
                        }} />
                      </ItemText>
                      <ItemText>
                        <BtnContainer>
                          <ItemBtnApply onClick={updateNameHandler}>
                            <ApplyIcon />
                            Apply
                          </ItemBtnApply>

                          <ItemBtnCancel onClick={nameEditHandler}>
                            <CancelIcon />
                            Cancel
                          </ItemBtnCancel>
                        </BtnContainer>
                      </ItemText>
                    </CardItem>
                  )}

                  <CardItem>
                    <ItemText>
                      <TextLabel>Email</TextLabel>
                      <TextContent>{localStorage.getItem("email") === null ? sessionStorage.getItem("email") : localStorage.getItem("email")}</TextContent>
                    </ItemText>
                  </CardItem>

                  {!passwordEdit ? (
                    <CardItem>
                      <ItemText>
                        <TextLabel>Password</TextLabel>
                        <TextContent>Your password doesn't shown here. Want to change?</TextContent>
                      </ItemText>
                      <ItemText>
                        <BtnContainer>
                          <ItemBtnEdit onClick={passwordEditHandler}>
                            <EditIcon />
                            Change
                          </ItemBtnEdit>
                        </BtnContainer>
                      </ItemText>
                    </CardItem>
                  ) : (
                    <CardItem>
                      <ItemText>
                        <TextLabel>Password</TextLabel>
                        <InputContent type='password' placeholder='Enter new password' onChange={(e) => {
                          setNewPassword(e.target.value);
                        }} />
                        {validate !== '' ? (<ValidateText>{validate}</ValidateText>) : ''}
                      </ItemText>
                      <ItemText>
                        <BtnContainer>
                          <ItemBtnApply onClick={updatePasswordHandler}>
                            <ApplyIcon />
                            Apply
                          </ItemBtnApply>

                          <ItemBtnCancel onClick={passwordEditHandler}>
                            <CancelIcon />
                            Cancel
                          </ItemBtnCancel>
                        </BtnContainer>
                      </ItemText>
                    </CardItem>
                  )}

                  <CardItem>
                    <ItemText>
                      <TextLabel>Role</TextLabel>
                      <TextContent>{localStorage.getItem("role") === null ? sessionStorage.getItem("role") : localStorage.getItem("role")}</TextContent>
                    </ItemText>
                  </CardItem>
                </CardItemContainer>
              </ItemCard>

              <ItemCard>
                <CardTitle>
                  <TitleText>Account Information</TitleText>
                </CardTitle>

                <CardItemContainer>
                  <CardItem>
                    <ItemText>
                      <TextLabel>Verify Status</TextLabel>
                      <TextContent>Congratulation, your account is verified!</TextContent>
                    </ItemText>
                  </CardItem>

                  {userRole === 'visitor' ? (
                    <CardItem>
                      <ItemText>
                        <TextLabel>Role Status</TextLabel>
                        <TextContent>{roleStatusObj.visitor}</TextContent>
                      </ItemText>
                      <ItemText>
                        {!applyOnClick ? (
                          <BtnContainer>
                            <ItemBtnApply onClick={applyStatusHandler}>
                              <ApplyIcon />
                              Apply
                            </ItemBtnApply>
                          </BtnContainer>
                        ) : ''}
                      </ItemText>
                    </CardItem>
                  ) : ''}
                  {userRole === 'employee' ? (
                    <CardItem>
                      <ItemText>
                        <TextLabel>Role Status</TextLabel>
                        <TextContent>{roleStatusObj.employee}</TextContent>
                      </ItemText>
                    </CardItem>
                  ) : ''}
                  {userRole === 'supervisor' ? (
                    <CardItem>
                      <ItemText>
                        <TextLabel>Role Status</TextLabel>
                        <TextContent>{roleStatusObj.supervisor}</TextContent>
                      </ItemText>
                    </CardItem>
                  ) : ''}
                </CardItemContainer>
              </ItemCard>
            </ItemContainer>
          </Content>
        </Container>
      </Page>
    </>
  );
};

export default Profile;
