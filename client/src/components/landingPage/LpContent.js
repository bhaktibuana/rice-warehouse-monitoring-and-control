import React, { useState } from 'react';
import { Button } from './ButtonStyled';
import { Redirect } from 'react-router';
import {
  BtnWrap,
  Column1,
  Column2,
  ContentContainer,
  ContentRow,
  ContentWrapper,
  Heading,
  Img,
  ImgWrap,
  Subtitle,
  TextWrapper,
  TopLine
} from './LpContentStyled';

const LpContent = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headLine,
  darkText,
  description,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  to,
  redirect
}) => {

  const [signupState, setSignupState] = useState(false);

  const redirectHandler = () => {
    setSignupState(!signupState);
  };

  return (
    <>
      {signupState ? (<Redirect to='/signup' />) : ''}
      <ContentContainer lightBg={lightBg} id={id}>
        <ContentWrapper>
          <ContentRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headLine}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <Button
                    to={to}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact={true}
                    offset={-70}
                    primary={primary ? 1 : 0}
                    dark={dark}
                    onClick={redirect ? redirectHandler : ''}
                  >{buttonLabel}</Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </ContentRow>
        </ContentWrapper>
      </ContentContainer>
    </>
  );
};

export default LpContent;
