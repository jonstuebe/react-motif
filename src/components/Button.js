import styled from "styled-components";
import { lighten, darken } from "polished";

const Button = styled.button`
  background-color: #3297D3;
  border: 1px solid rgba(26,80,112,0);
  box-shadow: 0 2px 4px 0 rgba(106,132,162,0.83);
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
  color: ${darken(0.05, "#fff")};
  padding: 12px 0;
  min-width: 145px;

  &:hover {
    border: 1px solid rgba(26,80,112,0.21);
    box-shadow: 0 2px 7px 0 rgba(106,132,162,0.83);
    background-color: ${lighten(0.03, "#3297D3")};
    color: #fff;
  }

  &:active {
    top: 1px;
    background-color: ${darken(0.03, "#3297D3")};
  }
`;

export default Button;
