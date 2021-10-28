import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import {
  BarIcon,
  MobileIcon,
  Nav,
  NavbarContainer,
  NavBtn,
  NavBtnLink,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu
} from './NavbarLpStyled';

const NavbarLp = ({ toggle }) => {

  const [scrollNav, setScrollNav] = useState(false);

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
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default NavbarLp;
