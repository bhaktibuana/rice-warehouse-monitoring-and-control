import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import {
  FacebookIcon,
  FooterContainer,
  FooterWrap,
  InstagramIcon,
  LinkedinIcon,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  TwitterIcon,
  WebsiteRight,
  YoutubeIcon
} from './FooterStyled';

const Footer = () => {

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo to='/' onClick={toggleHome}>
                Rice Control
              </SocialLogo>

              <WebsiteRight>
                Rice Control © {new Date().getFullYear()} All rights Reserved.
              </WebsiteRight>

              <SocialIcons>
                <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                  <FacebookIcon />
                </SocialIconLink>

                <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                  <InstagramIcon />
                </SocialIconLink>

                <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                  <YoutubeIcon />
                </SocialIconLink>

                <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                  <TwitterIcon />
                </SocialIconLink>

                <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                  <LinkedinIcon />
                </SocialIconLink>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    </>
  );
};

export default Footer;
