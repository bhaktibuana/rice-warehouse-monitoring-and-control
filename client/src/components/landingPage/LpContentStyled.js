import styled from 'styled-components';

export const ContentContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : 'rgb(40, 40, 40)')};
  
  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const ContentWrapper = styled.div`
  background: transparent;
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const ContentRow = styled.div`
  background: transparent;
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
  }
`;

export const Column1 = styled.div`
  background: transparent;
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  background: transparent;
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  background: transparent;
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const TopLine = styled.p`
  background: transparent;
  color: #b36d34;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  background: transparent;
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : 'rgb(40, 40, 40)')};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  background: transparent;
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? 'rgb(40, 40, 40)' : '#fff')};
`;

export const BtnWrap = styled.div`
  background: transparent;
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  background: transparent;
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  background: transparent;
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;