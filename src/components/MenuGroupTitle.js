import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { colors } from "../theme";

import Chevron from "../icons/Chevron";

const Title = styled.h2`
  -webkit-font-smoothing: antialiased;
  font-family: 'Lato', sans-serif;
  text-transform: uppercase;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  display: inline-block;
  margin: 0 0 0 8px;
  padding: 0;
`;
const Container = styled.div`
  background-color: ${colors.darkBlue};
  padding: 10px 0 10px 15px;
  cursor: pointer;
`;

class MenuGroupTitle extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired
  };
  render() {
    return (
      <Container onClick={this.props.onClick}>
        <Chevron direction="left" />
        <Title>{this.props.title}</Title>
      </Container>
    );
  }
}

export default MenuGroupTitle;
