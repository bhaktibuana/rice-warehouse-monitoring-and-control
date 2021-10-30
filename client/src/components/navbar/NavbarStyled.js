import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';

export const Nav = styled.div`
  background: linear-gradient(
    112.83deg, 
    rgba(255, 255, 255, 0.82) 0%,
    rgba(255, 255, 255, 0.8) 110.84%
  );
  top: 18px;
  display: flex;
  border-style: solid;
  border-width: 1.5px;
  border-color: #fff;
  position: fixed;
  box-shadow: rgb(0 0 0 / 5%) 0px 7px 23px;
  filter: none;
  backdrop-filter: blur(21px);
  transition-delay: 0s, 0s, 0s, 0s;
  transition-duration: 0.25s, 0.25s, 0.25s, 0s;
  transition-timing-function: linear, linear, linear, linear;
  border-radius: 16px;
  min-height: 75px;
  line-height: 25.6px;
  margin-inline: auto;
  margin-top: 0px;
  padding: 8px 30px 8px 12px;
  right: 30px;
  left: calc(276px + 15px + 15px);
  width: calc(100% - 276px - 30px - 30px);
  align-items: center;
`;

export const NavContainer = styled.div`
  background: transparent;
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  height: 50px;
`;

export const NavTitle = styled.div`
  background: transparent;
  width: auto;
  height: 100%;
  display: grid;
`;

export const TitleText1 = styled.p`
  background: transparent;
  font-size: 1.1rem;
  color: rgb(140, 140, 140);
`;

export const TitleText2 = styled.p`
  background: transparent;
  font-size: 1.1rem;
  color: rgb(40, 40, 40);
  font-weight: bold;
`;

export const NavBtn = styled.nav`
  background: transparent;
  display: flex;
  align-items: center;
`;

export const NavBtnText = styled.p`
  background: transparent;
  font-weight: bold;
  font-size: 1.1rem;
  color: rgb(90, 90, 90);
`;

export const IconLink = styled(LinkR)`
  background: transparent;
  display: flex;
  align-items: center;
  text-decoration: none;
`;

export const LogoutIcon = styled(FiLogOut)`
  color: rgb(90, 90, 90);
  background: transparent;
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin: 0px 10px 0px 10px;

  &:hover {
    width: 22px;
    height: 22px;
    margin: 0px 10px 0px 8px;
  }
`;