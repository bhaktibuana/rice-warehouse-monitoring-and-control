import React from 'react';
import {
  IconLink,
  LogoutIcon,
  Nav,
  NavBtn,
  NavBtnText,
  NavContainer,
  NavTitle,
  TitleText1,
  TitleText2,
} from './NavbarStyled';

const Navbar = ({
  title1,
  title2
}) => {

  const signOutHandler = () => {
    localStorage.clear();
    sessionStorage.clear();
  }

  return (
    <>
      <Nav>
        <NavContainer>
          <NavTitle>
            <TitleText1>{title1}</TitleText1>
            <TitleText2>{title2}</TitleText2>
          </NavTitle>

          <NavBtn>
            <NavBtnText>{localStorage.getItem("name") === null ? sessionStorage.getItem("name") : localStorage.getItem("name")}</NavBtnText>
            <IconLink
              to='/signin'
              onClick={signOutHandler}
            >
              <LogoutIcon />
            </IconLink>
          </NavBtn>
        </NavContainer>
      </Nav>
    </>
  );
};

export default Navbar;
