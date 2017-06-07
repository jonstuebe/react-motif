import styled from "styled-components";
import { get } from "lodash";
import { getColors } from "../theme";
import { lighten, darken, transparentize } from "polished";

const Button = styled.button`
  background-color: ${props => {
    return getColors(props).background;
  }};
  border: 1px solid transparent;
  box-shadow: 0 2px 4px 0 ${props => {
    return transparentize(".83", darken(0.1, getColors(props).background));
  }};
  border-radius: 3px;
  transition: all 250ms ease-in-out;
  outline: none;
  cursor: pointer;
  position: relative;

  font-family: 'Lato', sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  -webkit-font-smoothing: antialiased;
  font-size: 13px;
  letter-spacing: 0.6px;
  color: ${props => {
    return darken(0.05, getColors(props).text);
  }};
  padding: 12px 0;
  min-width: 145px;

  &:hover {
    border: 1px solid ${props => {
      return transparentize(0.21, darken(0.05, getColors(props).background));
    }};
    box-shadow: 0 2px 4px 0 ${props => {
      return transparentize(".6", darken(0.15, getColors(props).background));
    }};
    background-color: ${props => {
      return lighten(0.03, getColors(props).background);
    }};
    color: ${props => {
      return getColors(props).text;
    }};
  }

  &:active {
    top: 1px;
    background-color: ${props => {
      return darken(0.03, getColors(props).background);
    }};
  }
`;

export default Button;
