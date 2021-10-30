import React from 'react';
import {
  Nav,
  NavbarContainer,
  NavbarWrapper,
  NavBtn,
  NavBtnLink,
  NavImg,
  NavLogo
} from './NavbarSignStyled';

const NavbarSign = ({
  btnText,
  btnLink
}) => {
  return (
    <>
      <NavbarWrapper>
        <Nav>
          <NavbarContainer>
            <NavLogo to='/'>
              <NavImg src={require('../../images/rice_logo.png').default} alt='rice-logo' />
              Rice Control
            </NavLogo>

            <NavBtn>
              <NavBtnLink to={btnLink}>{btnText}</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </NavbarWrapper>
    </>
  );
};

export default NavbarSign;
