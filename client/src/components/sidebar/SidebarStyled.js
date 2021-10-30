import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { IoHome } from 'react-icons/io5';
import { FaDatabase, FaUser } from 'react-icons/fa';

export const Side = styled.div`
  background: transparent;
  width: 276px;
  height: 100%;
  display: block;
  justify-content: center;
  align-items: center;
  position: fixed;
  padding-bottom: 16px;
  padding-top: 16px;
  top: 0;
`;

export const SidebarContainer = styled.div`
  background: transparent;
  margin-inline-start: 16px;
  display: block;
  width: 260px;
  height: 100%;
  border-radius: 16px;
  padding-inline: 20px;
`;

export const SidebarLogo = styled(LinkR)`
  background: transparent;
  height: 88px;
  width: 220px;
  padding-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 25px;
  text-decoration: none;
  cursor: pointer;
  font-size: 1.3rem;
  font-weight: bold;
  color: rgb(40, 40, 40);
`;

export const SidebarImg = styled.img`
  background: transparent;
  width: 40px;
  margin-right: 10px;
`;

export const SidebarLine = styled.div`
  background:linear-gradient(
    90deg,
    rgba(224, 225, 226, 0) 0%,
    rgb(224, 225, 226) 49.52%,
    rgba(224, 225, 226, 0) 100%
  );
  display: flex;
  height: 1px;
  width: 100%;
  margin-bottom: 12px;
`;

export const SidebarMenu = styled.div`
  background: transparent;
  width: 100%;
  height: 522px;
`;

export const SidebarItem = styled(LinkR)`
  background: ${({ selected }) => (selected ? '#fff' : 'transparent')};
  width: 100%;
  height: 54px;
  padding: 12px 16px;
  margin-bottom: 12px;
  display: inline-flex;
  justify-content: flex-start;
  position: relative;
  white-space: nowrap;
  vertical-align: middle;
  outline: transparent solid 2px;
  outline-offset: 2px;
  line-height: 1.2px;
  border-radius: 15px;
  font-weight: bold;
  ${({ isPntr }) => (isPntr ? 'cursor: pointer;' : 'cursor: default;')}
  transition: all 0.2s linear 0s;
  text-decoration: none;
  ${({ selected }) => (selected ? 'box-shadow: rgb(0 0 0 / 4%) 0px 7px 11px;' : '')}
`;

export const SidebarIcon = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  margin-inline-end: 12px;
  transition: all 0.2s linear 0s;
  background: ${({ selected }) => (selected ? '#fac267' : '#fff')};
`;

export const SidebarP = styled.p`
  background: transparent;
  color: ${({ selected }) => (selected ? 'rgb(40, 40, 40)' : 'rgb(140, 140, 140)')};
  font-size: 1rem;
  margin-top: auto;
  margin-bottom: auto;
`;

export const DashboardIcon = styled(IoHome)`
  background: transparent;
  width: 16px;
  height: 16px;
  color: ${({ selected }) => (selected ? '#fff' : '#fac267')};
`;

export const DataIcon = styled(FaDatabase)`
  background: transparent;
  width: 16px;
  height: 16px;
  color: ${({ selected }) => (selected ? '#fff' : '#fac267')};
`;

export const UserIcon = styled(FaUser)`
  background: transparent;
  width: 16px;
  height: 16px;
  color: ${({ selected }) => (selected ? '#fff' : '#fac267')};
`;