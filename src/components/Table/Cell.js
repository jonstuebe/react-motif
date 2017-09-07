import React, { Component } from "react";
import styled from "styled-components";
import { colors } from "../../theme";

const Cell = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
  vertical-align: top;

  width: ${props => props.width}px;

  margin: 0;
  font-family: 'Lato', sans-serif;
  font-size: 14px;
  font-weight: normal;
  color: ${colors.darkBlue};
  -webkit-font-smoothing: antialiased;

  .mobile-label {
    display: none;
  }

  @media all and (max-width: 600px) {
    width: auto;
    margin-bottom: 5px;
    .mobile-label {
      display: block;
      font-weight: bold;
      float: left;
      margin-right: 10px;
      text-transform: uppercase;
      font-size: 13px;
    }
  }

`;

export default Cell;
