import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';

export const FooterContainer = styled.footer`
  background-color: rgb(40, 40, 40);
`;

export const FooterWrap = styled.div`
  background: transparent;
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

export const SocialMedia = styled.section`
  background: transparent;
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  background: transparent;
  color: #fff;
  justify-content: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
`;

export const WebsiteRight = styled.div`
  background: transparent;
  color: #fff;
  margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled.a`
  background: transparent;
  color: #fff;
  font-size: 24px;
`;

export const FacebookIcon = styled(FaFacebook)`
  background: transparent;
`;

export const InstagramIcon = styled(FaInstagram)`
  background: transparent;
`;
export const YoutubeIcon = styled(FaYoutube)`
  background: transparent;
`;
export const TwitterIcon = styled(FaTwitter)`
  background: transparent;
`;
export const LinkedinIcon = styled(FaLinkedin)`
  background: transparent;
`;