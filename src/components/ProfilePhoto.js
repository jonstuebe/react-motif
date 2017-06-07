import React from "react";
import styled from "styled-components";
import { darken, transparentize } from "polished";
import { colors } from "../theme";

const getSize = props => {
  return "33px";
};
const Container = styled.div`
  width: ${props => getSize};
  height: ${props => getSize};
  border-radius: 50%;
  display: inline-block;
  overflow: hidden;
  box-shadow: 0 2px 4px 0 ${transparentize(0.1, darken(0.2, colors.darkBlue))};
  transition: box-shadow 250ms ease-in-out;

  &:hover {
    box-shadow: 0 2px 4px 0 ${transparentize(
      0.05,
      darken(0.3, colors.darkBlue)
    )};
  }
`;
const Image = styled.img`
  width: ${props => getSize};
  height: auto;
`;

export default ({ image, style }) =>
  <Container style={style}><Image src={image} /></Container>;
