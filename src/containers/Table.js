import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Table, Column, Cell } from "../components/Table";
import Tag from "../components/Tag";

import Pagination from "../components/Pagination";

const TableContainer = styled.div`
  overflow: auto;
`;

export { default as Column } from "../components/Table/Column";
export { default as Cell } from "../components/Table/Cell";

export default class Table extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    columns: PropTypes.array,
    totalNum: PropTypes.number,
    pagination: PropTypes.bool
  };
  renderColumns = () => {
    if (this.props.columns) {
      return this.props.columns.map((column, index) => {
        return (
          <Column
            key={index}
            dataKey={column.dataKey}
            width={column.width}
            cellRenderer={column.cellRenderer}
          >
            {column.label}
          </Column>
        );
      });
    } else {
      return this.props.children;
    }
  };
  render() {
    const { data, totalNum, pagination } = this.props;
    return (
      <div>
        {pagination && (
          <Pagination totalNum={totalNum} numResults={data.length} />
        )}
        <TableContainer>
          <Table data={data}>{this.renderColumns()}</Table>
        </TableContainer>
        {pagination && (
          <Pagination totalNum={totalNum} numResults={data.length} />
        )}
      </div>
    );
  }
}
