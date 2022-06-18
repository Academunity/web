import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    grid: {
      container: string;
      gutter: string;
    };
    border: {
      widths: {
        thin: string;
      };
      radius: {
        small: string;
        medium: string;
      };
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
        xxxlarge: string;
        huge: string;
        xhuge: string;
      };
    };
    spacings: {
      xxxsmall: string;
      xxsmall: string;
      xsmall: string;
      small: string;
      medium: string;
      large: string;
      xlarge: string;
      xxlarge: string;
      huge: string;
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

      white: string;
      black: string;
    };
  }
}
