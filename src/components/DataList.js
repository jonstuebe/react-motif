import React, { Component } from "react";
import PropTypes from "prop-types";
import withUserAgent from "react-useragent";
import styled from "styled-components";
import { colors } from "../theme";
import { transparentize } from "polished";

const TableStyled = styled.table`
  width: 100%;
  border-collapse: collapse;
  ${props => {
    if (props.fixed) {
      return `table-layout: fixed;`;
    }
  }}
`;
const MobileTableStyled = styled.div`

`; // @todo
const TheadStyled = styled.thead`
  ${props => {
    if (props.fixed) {
      return `
        tr {
          display: block;
          position: relative;
        }
      `;
    }
  }}
`;
const MobileTheadStyled = styled.div`

`; // @todo
const TbodyStyled = styled.tbody`
  ${props => {
    if (props.fixed) {
      return `
        display: block;
        width: 100%;
        height: ${props.height}px;
        overflow: auto;
      `;
    }
  }}

  tr:nth-child(even) {
    background-color: ${props =>
      props.striped ? transparentize(0.75, colors.lightBlue) : null}
  }
  tr:hover {
    background-color: ${props =>
      props.hover ? transparentize(0.4, colors.lightBlue) : null}
  }
`;
const MobileTbodyStyled = styled.div`

`; // @todo

class Tbody extends Component {
  static contextTypes = {
    dataListOptions: PropTypes.object
  };
  render() {
    const { dataListOptions } = this.context;
    const { children } = this.props;
    let TbodyComponent = TbodyStyled;
    if (dataListOptions.mobile) {
      TbodyComponent = MobileTbodyStyled;
    }
    return (
      <TbodyComponent {...dataListOptions}>
        {children}
      </TbodyComponent>
    );
  }
}

class Thead extends Component {
  static contextTypes = {
    dataListOptions: PropTypes.object
  };
  render() {
    const { dataListOptions } = this.context;
    const { children } = this.props;
    let TheadComponent = TheadStyled;
    if (dataListOptions.mobile) {
      TheadComponent = MobileTheadStyled;
    }
    return (
      <TheadComponent {...dataListOptions}>
        {children}
      </TheadComponent>
    );
  }
}

class Table extends Component {
  static contextTypes = {
    dataListOptions: PropTypes.object
  };
  render() {
    const { dataListOptions } = this.context;
    const { children } = this.props;
    let TableComponent = TableStyled;
    if (dataListOptions.mobile) {
      TableComponent = MobileTableStyled;
    }
    return (
      <TableComponent {...dataListOptions}>
        {children}
      </TableComponent>
    );
  }
}

class DataList extends Component {
  static childContextTypes = {
    dataListOptions: PropTypes.object
  };
  getChildContext() {
    return {
      dataListOptions: this.state.dataListOptions
    };
  }
  constructor(props) {
    super(props);
    this.state = {
      dataListOptions: {
        striped: props.striped,
        hover: props.hover,
        height: props.height,
        fixed: props.fixed,
        mobile: false
      }
    };
  }
  isMobile = (props = null) => {
    if (!props) props = this.props;
    return props.ua.mobile ? true : false;
  };
  componentDidMount() {
    this.setState(prevState => {
      prevState.dataListOptions.mobile = this.isMobile(this.props);
      return prevState;
    });
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      dataListOptions: {
        striped: nextProps.striped,
        hover: nextProps.hover,
        height: nextProps.height,
        fixed: nextProps.fixed,
        mobile: this.isMobile(nextProps)
      }
    });
  }
  render() {
    const { children, mobile } = this.props;
    return (
      <div>
        {children({ Tbody, Thead, Table })}
      </div>
    );
  }
}

export default withUserAgent(DataList);
