import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute
} from './SidebarLpStyled';

const SidebarLp = ({ isOpen, toggle }) => {

  const checkUserExist = () => {
    if (localStorage.getItem("email") === null) {
      if (sessionStorage.getItem("email") === null) {
        return false;
      } else {
        return true;
      }
    } else {
      return true;
    }
  };

  const signOutHandler = () => {
    localStorage.clear();
    sessionStorage.clear();
  }

  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>

        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink onClick={toggle} to="about">
              About
            </SidebarLink>
            <SidebarLink onClick={toggle} to="discover">
              Discover
            </SidebarLink>
            <SidebarLink onClick={toggle} to="services">
              Services
            </SidebarLink>
            <SidebarLink onClick={toggle} to="signup">
              Sign Up
            </SidebarLink>
          </SidebarMenu>

          <SideBtnWrap>
            {checkUserExist() ? (
              <SidebarRoute onClick={signOutHandler} to="/signin">Sign Out</SidebarRoute>
            ) : (
              <SidebarRoute to="/signin">Sign In</SidebarRoute>
            )}
          </SideBtnWrap>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};

export default SidebarLp;
