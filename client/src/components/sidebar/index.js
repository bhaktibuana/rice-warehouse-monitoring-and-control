import React from 'react';
import {
  Side,
  SidebarContainer,
  SidebarImg,
  SidebarMenu,
  SidebarLine,
  SidebarLogo,
  SidebarItem,
  SidebarIcon,
  DashboardIcon,
  SidebarP,
  DataIcon,
  UserIcon
} from './SidebarStyled';

const Sidebar = ({ sidebarObject }) => {
  return (
    <>
      <Side>
        <SidebarContainer>
          <SidebarLogo to='/'>
            <SidebarImg src={require('../../images/rice_logo.png').default} alt='rice-logo' />
            Rice Control
          </SidebarLogo>

          <SidebarLine />

          <SidebarMenu>
            <SidebarItem 
              to='/dashboard'
              selected={sidebarObject === 'dashboard' ? true : false}
              isPntr={true}
            >
              <SidebarIcon selected={sidebarObject === 'dashboard' ? true : false}>
                <DashboardIcon selected={sidebarObject === 'dashboard' ? true : false} />
              </SidebarIcon>
              <SidebarP selected={sidebarObject === 'dashboard' ? true : false}>Dashboard</SidebarP>
            </SidebarItem>

            <SidebarItem 
              to='/data'
              selected={sidebarObject === 'data' ? true : false}
              isPntr={true}
            >
              <SidebarIcon selected={sidebarObject === 'data' ? true : false}>
                <DataIcon selected={sidebarObject === 'data' ? true : false} />
              </SidebarIcon>
              <SidebarP selected={sidebarObject === 'data' ? true : false}>Data</SidebarP>
            </SidebarItem>

            <SidebarItem 
              to='#'
              selected={false}
              isPntr={false}
            >
              <SidebarP selected={true}>Account Page</SidebarP>
            </SidebarItem>

            <SidebarItem 
              to='/profile'
              selected={sidebarObject === 'profile' ? true : false}
              isPntr={true}
            >
              <SidebarIcon selected={sidebarObject === 'profile' ? true : false}>
                <UserIcon selected={sidebarObject === 'profile' ? true : false} />
              </SidebarIcon>
              <SidebarP selected={sidebarObject === 'profile' ? true : false}>Profile</SidebarP>
            </SidebarItem>
          </SidebarMenu>
        </SidebarContainer>
      </Side>
    </>
  );
};

export default Sidebar;
