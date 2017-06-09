import React from "react";
import { withTheme, ThemeProvider as Provider } from "styled-components";
import { get, extend } from "lodash";

const colors = {
  darkBlue: "#8798AB",
  blue: "#3297D3",
  lightBlue: "#EFF4FC",
  darkGreen: "#24B47E",
  green: "#3ECF8E",
  lightGrey: "#ECF0F5"
};
const defaultTheme = extend(colors, {
  primary: colors.blue,
  secondary: colors.darkGreen
});

let fonts = {
  fontFamily: `'Lato', sans-serif`,
  fontSmoothing: "antialiased"
};

const ThemeProvider = ({ children }) =>
  <Provider theme={defaultTheme}>{children}</Provider>;

const getColors = (props = {}) => {
  let colors;
  if (props.primary) {
    colors = {
      background: get(props, "theme.blue"),
      text: "#fff"
    };
  } else {
    colors = {
      background: get(props, "theme.lightGrey"),
      text: get(props, "theme.darkBlue")
    };
  }
  return colors;
};

export { defaultTheme, withTheme, ThemeProvider, colors, getColors, fonts };
