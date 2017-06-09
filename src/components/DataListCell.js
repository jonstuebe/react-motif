import React, { Component } from "react";
import styled from "styled-components";
import { colors } from "../theme";

const Cell = styled.td`
  margin: 0;
  padding: 10px;
  font-family: 'Lato', sans-serif;
  font-size: 14px;
  font-weight: normal;
  color: ${colors.darkBlue};
  -webkit-font-smoothing: antialiased;
  border-bottom: 1px solid ${colors.lightBlue};
`;
const MobileCell = styled.div`

`;

export const CellStyled = Cell;
export const MobileCellStyled = MobileCell;

class DataListCell extends Component {
  render() {
    return <Cell>{this.props.children}</Cell>;
  }
}

export default DataListCell;
