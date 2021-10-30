import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import {
  BarIcon,
  DropDown,
  DropDownContainer,
  DropDownLinks,
  DropDownMenu,
  GearIcon,
  MobileIcon,
  Nav,
  NavbarContainer,
  NavBtn,
  NavBtnLink,
  NavBtnText,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu
} from './NavbarLpStyled';

const NavbarLp = ({ toggle }) => {

  const [scrollNav, setScrollNav] = useState(false);
  const [visible, setVisible] = useState(false);

  const dropDwonHandler = () => {
    setVisible(!visible);
  };

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

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const signOutHandler = () => {
    localStorage.clear();
    sessionStorage.clear();
  }

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to='/' onClick={toggleHome}>Rice Control</NavLogo>
          <MobileIcon onClick={toggle}>
            <BarIcon />
          </MobileIcon>

          <NavMenu>
            <NavItem>
              <NavLinks
                to='control'
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-70}
              >
                Control
              </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks
                to='monitoring'
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-70}
              >
                Monitoring
              </NavLinks>
            </NavItem>
          </NavMenu>


          {checkUserExist() ? (
            <NavBtn>
              <NavBtnText>Hi, {localStorage.getItem("name") === null ? sessionStorage.getItem("name") : localStorage.getItem("name")}</NavBtnText>
              <GearIcon onClick={dropDwonHandler} />
            </NavBtn>
          ) : (
            <NavBtn>
              <NavBtnLink
                to='/signup'
                colorstate='false'
                bgstate='false'
                borderstate='false'
              >
                Sign Up
              </NavBtnLink>
              <NavBtnLink
                to='/signin'
                colorstate='true'
                bgstate='true'
                borderstate='true'
              >
                Sign In
              </NavBtnLink>
            </NavBtn>
          )}
        </NavbarContainer>
      </Nav>
      <DropDown>
        <DropDownContainer>
          <div></div>
          <div></div>
          <DropDownMenu
            scrollNav={scrollNav}
            visible={visible}
          >
            <DropDownLinks
              to='/profile'
            >
              Profile
            </DropDownLinks>

            <DropDownLinks
              to='/signin'
              onClick={signOutHandler}
            >
              Sign Out
            </DropDownLinks>
          </DropDownMenu>
        </DropDownContainer>
      </DropDown>
    </>
  );
};

export default NavbarLp;
