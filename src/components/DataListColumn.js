import React, { Component } from "react";
import styled from "styled-components";
import { colors } from "../theme";
import { transparentize } from "polished";

import { CellStyled, MobileCellStyled } from "./DataListCell";

const ColumnStyled = CellStyled.extend`
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  position: relative;

  &:after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 1px;
    left: 0;
    bottom: 0px;
    background-color: ${transparentize(0.55, colors.darkBlue)};
  }
`;
const MobileColumnStyled = MobileCellStyled.extend`
`;

class DataListColumn extends Component {
  render() {
    return (
      <ColumnStyled>
        {this.props.children}
      </ColumnStyled>
    );
  }
}

export default DataListColumn;
