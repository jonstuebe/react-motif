import React, { Component } from "react";
import styled from "styled-components";
import withUserAgent from "react-useragent";

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;
const Tbody = styled.tbody`

`;
const MobileTable = styled.div`

`; // @todo
const MobileTbody = styled.div`

`; // @todo

class DataList extends Component {
  isMobile = () => {
    return this.props.ua.mobile ? true : false;
  };
  render() {
    const { children } = this.props;
    const mobile = this.isMobile();
    return (
      <Table mobile={mobile}>
        <Tbody mobile={mobile}>
          {React.Children.map(children, child => {
            return React.cloneElement(child, { mobile });
          })}
        </Tbody>
      </Table>
    );
  }
}

export default withUserAgent(DataList);
