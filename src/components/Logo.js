import React from "react";
import styled from "styled-components";
import { colors } from "../theme";
import { lighten } from "polished";

export default styled.h1`
  margin: 0;
  padding: 0;
  font-family: "Lato", sans-serif;
  font-size: ${props => (props.size ? props.primary : "19px")};
  font-weight: bold;
  color: ${props =>
    props.color ? props.color : lighten(0.05, colors.lightGrey)};
  -webkit-font-smoothing: antialiased;
`;
