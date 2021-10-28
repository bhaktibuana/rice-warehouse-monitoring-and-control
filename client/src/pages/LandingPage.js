import React, { useState } from 'react';
import Footer from '../components/footer';
import LandingPageComponents from '../components/landingPage';
import LpContent from '../components/landingPage/LpContent';
import { homeObjOne, controlObj } from '../components/landingPage/LpData';
import NavbarLp from '../components/navbarLp';
import SidebarLp from '../components/sidebarLp';

const LandingPage = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <SidebarLp isOpen={isOpen} toggle={toggle} />
      <NavbarLp toggle={toggle} />
      <LandingPageComponents />
      <LpContent {...controlObj} />
      <LpContent {...homeObjOne} />
      <Footer />
    </>
  );
};

export default LandingPage;
