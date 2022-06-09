import { rgba } from 'polished';

export default {
  grid: {
    container: '130rem',
    gutter: '3.2rem',
  },
  border: {
    radius: '0.4rem',
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50,
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out',
  },
  font: {
    family:
      "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    light: 300,
    normal: 400,
    bold: 600,
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.8rem',
      huge: '5.2rem',
    },
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem',
  },
  colors: {
    primary: '#BA75FF',
    secondary: '#201F2B',
    mainBg: '#111116',

    text: rgba('#FFF', 0.87),
    textLight: rgba('#FFF', 0.6),

    textGray: rgba('#B6B6B6', 0.87),
    textGrayLight: rgba('#CCCCCC', 0.87),
    textGrayLighter: rgba('#CCCCCC', 0.6),

    gray: '#8F8F8F',
    grayDark: '#44434B',
    grayDarker: '#25242C',
    grayDarkest: '#19181F',

    textBg: rgba('#3D4853', 0.6),

    danger: '#FF6347',
  },
};
