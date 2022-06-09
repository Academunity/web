import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    grid: {
      container: string;
      gutter: string;
    };
    border: {
      radius: string;
    };
    layers: {
      base: number;
      menu: number;
      overlay: number;
      modal: number;
      alwaysOnTop: number;
    };
    transition: {
      default: string;
      fast: string;
    };
    font: {
      family: string;
      light: number;
      normal: number;
      bold: number;
      sizes: {
        xsmall: string;
        small: string;
        medium: string;
        large: string;
        xlarge: string;
        xxlarge: string;
        huge: string;
      };
    };
    spacings: {
      xxsmall: string;
      xsmall: string;
      small: string;
      medium: string;
      large: string;
      xlarge: string;
      xxlarge: string;
    };
    colors: {
      primary: string;
      secondary: string;
      mainBg: string;

      text: string;
      textLight: string;

      textGray: string;
      textGrayLight: string;
      textGrayLighter: string;

      gray: string;
      grayDark: string;
      grayDarker: string;
      grayDarkest: string;

      textBg: string;

      danger: string;
    };
  }
}
