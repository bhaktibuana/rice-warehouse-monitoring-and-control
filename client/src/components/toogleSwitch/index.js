import React from 'react';
import { Input, Slider, Switch } from './ToogleSwitchStyled';

const ToogleSwitch = () => {
  return (
    <>
      <Switch>
        <Input type='checkbox' />
        <Slider></Slider>
      </Switch>
    </>
  );
};

export default ToogleSwitch;