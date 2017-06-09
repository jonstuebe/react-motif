import React, { Component } from "react";
import styled from "styled-components";
import { omit } from "lodash";
import { Link, withRouter, matchPath } from "react-router-dom";

import MenuItem from "./MenuItem";

const StyledLink = styled(Link)`
  text-decoration: none;
`;

class MenuItemLink extends Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
  }
  componentDidMount() {
    this.setActive(this.props);
  }
  componentWillReceiveProps(nextProps) {
    this.setActive(nextProps);
  }
  setActive = props => {
    const match = this.isActive(props);
    const isActive = match && match.isExact ? true : false;
    this.setState({ active: isActive });
  };
  isActive = props => {
    return matchPath(props.to, { path: props.location.pathname });
  };
  render() {
    const { active } = this.state;
    return (
      <StyledLink to={this.props.to}>
        <MenuItem {...omit(this.props, ["active"])} active={active} />
      </StyledLink>
    );
  }
}

export default withRouter(MenuItemLink);
