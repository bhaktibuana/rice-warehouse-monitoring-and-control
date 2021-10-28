import styled from 'styled-components';
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';

export const Container = styled.div`
  background: rgb(40, 40, 40);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 1000px;
  position: relative;
  z-index: 1;

  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      180deg, rgba(0, 0, 0, 0.2) 0%, 
      rgba(0, 0, 0, 0.6) 100%
    ), 
    linear-gradient(
      180deg, rgba(0, 0, 0, 0.2) 0%, 
      transparent 100%
    );
    z-index: 2;
  }
`;

export const LpBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const ImgBg = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const LpContent = styled.div`
  background: transparent;
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LpH1 = styled.h1`
  background: transparent;
  color: #fff;
  font-size: 48px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const LpP = styled.p`
  background: transparent;
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const LpBtnWrapper = styled.div`
  background: transparent;
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
  background: transparent;
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  background: transparent;
  margin-left: 8px;
  font-size: 20px;
`;