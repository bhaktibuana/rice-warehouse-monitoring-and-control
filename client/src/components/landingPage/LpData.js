export const controlObj = {
  id: 'control',
  to: 'monitoring',
  redirect: false,
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Control Optimization ',
  headLine: 'Maintain superior quality of rice',
  description: 'Get access to control the temperature and humidity level of rice for superior rice quality.',
  buttonLabel: 'Learn More',
  imgStart: true,
  img: require('../../images/image-4.svg').default,
  alt: 'control',
  dark: false,
  primary: false,
  darkText: true
};

export const homeObjOne = {
  id: 'monitoring',
  redirect: true,
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Monitoring Access',
  headLine: 'Monitor rice storage conditions',
  description: 'Get access to monitoring rice temperature and humidity conditions in storage.',
  buttonLabel: 'Join Now!',
  imgStart: false,
  img: require('../../images/image-5.svg').default,
  alt: 'monitoring',
  dark: true,
  primary: true,
  darkText: false
};