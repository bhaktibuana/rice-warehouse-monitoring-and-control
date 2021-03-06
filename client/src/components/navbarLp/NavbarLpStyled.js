import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
import { FaBars } from 'react-icons/fa';
import { BsGearFill } from 'react-icons/bs';

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? '#fac267' : 'rgba(250, 194, 103, 0.9)')};
  height: 70px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  background: transparent;
  display: flex;
  justify-content: space-between;
  height: 70px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
  background: transparent;
  color: rgb(40, 40, 40);
  justify-content: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    background: transparent;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.ul`
  background: transparent;
  display: flex;
  align-items: center;
  list-style: none;
  text-align: none;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  background: transparent;
  height: 70px;
`;

export const NavLinks = styled(LinkS)`
  background: transparent;
  color: rgb(40, 40, 40);
  font-weight: bold;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid rgb(40, 40, 40);
  }
`;

export const NavBtn = styled.nav`
  background: transparent;
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 12px;
  margin: 0px 4px;
  background: ${({ bgstate }) => (bgstate === 'true' ? 'rgb(40, 40, 40)' : '#fac267')};
  white-space: nowrap;
  font-weight: bold;
  padding: 8px 18px;
  color: ${({ colorstate }) => (colorstate === 'true' ? '#fac267' : 'rgb(40, 40, 40)')};
  font-size: 16px;
  outline: none;
  border: 2px solid ${({ borderstate }) => (borderstate === 'true' ? 'rgb(40, 40, 40)' : '#fac267')};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fac267;
    color: rgb(40, 40, 40);
  }
`;

export const NavBtnText = styled.p`
  margin: 0px 7px;
  background: transparent;
  font-weight: bold;
  font-size: 16px;
`;

export const BarIcon = styled(FaBars)`
  color: rgb(40, 40, 40);
  background: transparent;
`;

export const GearIcon = styled(BsGearFill)`
  color: rgb(40, 40, 40);
  background: transparent;
  cursor: pointer;

  &:hover {
    transform: rotate(10deg);
  }
`;

export const DropDown = styled.div`
  background: transparent;
  height: 70px;
  margin-top: -80px;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 70px;
  z-index: 10;
`;

export const DropDownContainer = styled.div`
  background: transparent;
  display: flex;
  justify-content: space-between;
  height: 70px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const DropDownMenu = styled.div`
  background: ${({ scrollNav }) => (scrollNav ? '#fac267' : 'rgba(250, 194, 103, 0.9)')};
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transform: ${({ visible }) => (visible ? 'translateY(0%)' : 'translateY(-2em)')};
  height: 90px;
  width: 140px;
  border-radius: 0px 0px 8px 8px;
  display: grid;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1rem;
  z-index: ${({ visible }) => (visible ? 1 : -1)};
  transition: all 0.3s ease-in-out 0s, visibility 0s linear 0.3s, z-index 0s linear 0.01s;
  ${({ visible }) => (visible ? 'transition-delay: 0s, 0s, 0.3s;' : '')}

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const DropDownLinks = styled(LinkR)`
  background: transparent;
  color: rgb(40, 40, 40);
  font-weight: bold;
  display: grid;
  align-items: center;
  text-decoration: none;
  text-align: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    font-size: 1.1rem;
  }
`;