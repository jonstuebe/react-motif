import React, { Component } from "react";
import styled from "styled-components";
import { colors } from "../theme";

const Row = styled.tr`
  background-color: #fff;
`;
const MobileRow = styled.div`

`; // @todo

class DataListRow extends Component {
  render() {
    const { children, mobile } = this.props;
    return (
      <Row>
        {React.Children.map(children, child => {
          return React.cloneElement(child, { mobile });
        })}
      </Row>
    );
  }
}

export default DataListRow;
