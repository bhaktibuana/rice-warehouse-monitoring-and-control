import React, { useState } from 'react';
import { Button } from './ButtonStyled';
import {
  ArrowForward,
  ArrowRight,
  Container,
  ImgBg,
  LpBg,
  LpBtnWrapper,
  LpContent,
  LpH1,
  LpP
} from './LandingPageStyled';

const LandingPageComponents = () => {

  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <>
      <Container id='home'>
        <LpBg>
          <ImgBg src={require('../../images/image-3.jpg').default} />
        </LpBg>

        <LpContent>
          <LpH1>Monitor and Control Rice Condition</LpH1>
          <LpP>Store rice in the best storage to produce high quality</LpP>

          <LpBtnWrapper>
            <Button
              to='control'
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary={true}
              dark={true}
              smooth={true}
              duration={500}
              spy={true}
              exact={true}
              offset={-70}
            >
              Get Started! {hover ? (<ArrowForward />) : (<ArrowRight />)}
            </Button>
          </LpBtnWrapper>
        </LpContent>
      </Container>
    </>
  );
};

export default LandingPageComponents;
