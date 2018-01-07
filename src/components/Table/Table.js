import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { colors, fonts } from "../../theme";
import { isEqual, each, reduce } from "lodash";

import Cell from "./Cell";
import Column from "./Column";
import Row from "./Row";

const Container = styled.div`
  font-family: ${fonts.fontFamily};
  width: 100%;
`;

export default class Table extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    striped: PropTypes.bool,
    hover: PropTypes.bool
  };
  static defaultProps = {
    striped: false,
    hover: false
  };
  constructor(props) {
    super(props);
    this.state = {
      options: this.getOptions(props),
      columns: this.getColumns(props)
    };
  }
  componentWillReceiveProps(nextProps) {
    if (!isEqual(this.getOptions(nextProps), this.state.options)) {
      this.setState({
        options: this.getOptions(nextProps)
      });
    }
    this.setState({ columns: this.getColumns() });
  }
  getColumns = (props = null) => {
    if (!props) props = this.props;
    return props.children.map(child => {
      return {
        label: child.props.children,
        dataKey: child.props.dataKey,
        cellRenderer: child.props.cellRenderer,
        width: child.props.width
      };
    });
  };
  getOptions = (props = null) => {
    if (!props) props = this.props;
    return {
      striped: props.striped,
      hover: props.hover
    };
  };
  renderRow = ({ index, children, header }) => {
    const columnWidths = this.state.columns.map(column => {
      return column.width;
    });
    const totalWidth = columnWidths.reduce((a, b) => {
      return a + b;
    }, 0);

    return (
      <Row
        tableOptions={this.state.options}
        key={index}
        index={index}
        width={totalWidth}
      >
        {children
          ? children
          : Object.values(this.props.data[index]).map((value, cellIndex) => {
              const column = this.state.columns[cellIndex];
              const CellComponent =
                column && column.cellRenderer
                  ? column.cellRenderer.bind(null, {
                      label: column.label,
                      value
                    })
                  : Cell;
              return (
                <CellComponent key={cellIndex} width={columnWidths[cellIndex]}>
                  <span className="mobile-label">{column.label}</span> {value}
                </CellComponent>
              );
            })}
      </Row>
    );
  };
  render() {
    const { data, children } = this.props;
    return (
      <Container>
        {this.renderRow({ children, header: true })}
        {data.map((row, index) => {
          return this.renderRow.call(this, {
            index,
            isVisible: true
          });
        })}
      </Container>
    );
  }
}
