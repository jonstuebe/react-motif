import React from "react";
import styled from "styled-components";
import Table from "./Table";
import { transparentize } from "polished";
import { colors } from "../../theme";

const RowContainer = styled.div`
  display: flex;
	flex-direction: row;
	flex-wrap: no-wrap;
  min-width: ${props => props.width}px;
  max-width: 100%;
	box-sizing: border-box;

  @media all and (max-width: 600px) {
    display: ${props => (props.header ? "none" : "block")};
  }
`;

const RowInner = styled.div`
  padding: 12px;
  border-bottom: 1px solid #DCE1EA;
  box-sizing: border-box;
  display: flex;
	flex-direction: row;
	width: 100%;

  background-color: ${props =>
    props.index % 2 && !props.header
      ? transparentize(0.6, colors.lightBlue)
      : "#fff"};

  &:hover {
    ${props => {
      if (props.tableOptions.hover && !props.header) {
        return `
        background-color: ${colors.lightBlue} !important;
        box-shadow: 0 1px 2px 0 #E9EFFA;
        `;
      }
    }}
  }

  @media all and (max-width: 600px) {
    flex-direction: column;
  }

`;

const Row = ({ index, children, tableOptions, header, width }) =>
  <RowContainer width={width}>
    <RowInner tableOptions={tableOptions} header={header} index={index}>
      {children}
    </RowInner>
  </RowContainer>;

export default Row;
