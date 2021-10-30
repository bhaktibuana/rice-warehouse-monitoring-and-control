import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const NavbarWrapper = styled.div`
  padding: 5px;
  background: transparent;
  align-items: center;
  justify-content: center;
  display: flex;
  height: 90px;
`;

export const Nav = styled.nav`
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0px 0px 8px #c2c9d1;
  border-radius: 18px;
  height: 60px;
  margin-top: 0px;
  display: flex;
  width: 600px;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: fixed;
  top: 5;
  z-index: 10;

  @media screen and (max-width: 640px) {
    transition: 0.8s all ease;
    width: 95%;
    top: 5;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 18px;
  justify-content: space-between;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 10px;
  max-width: 600px;
`;

export const NavLogo = styled(LinkR)`
  color: #fac267;
  background: transparent;
  justify-content: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 4px;
  font-weight: bold;
  text-decoration: none;
`;

export const NavImg = styled.img`
  background: transparent;
  width: 45px;
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  background: transparent;
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 30px;
  background: #fac267;
  white-space: nowrap;
  padding: 10px 22px;
  color: #FFFFFF;
  font-size: 16px;
  font-weight: bold;
  outline: none;
  border: 2px solid #FFFFFF;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #FFFFFF;
    color: #fac267;
    border: 2px solid #fac267;
  }
`;