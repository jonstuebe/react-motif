import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { colors } from "../theme";

const Container = styled.div`
  border-bottom: 1px solid ${colors.lightBlue};
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  user-select: none;
  cursor: default;
`;

const Actions = styled.div`
  padding: 10px;
`;

const Title = styled.h2`
  font-weight: bold;
  font-size: 20px;
  color: ${colors.darkBlue};
  -webkit-font-smoothing: antialiased;
  padding: 15px;
  margin: 0;
`;

export default class PageTitle extends Component {
  static propTypes = {
    children: PropTypes.any.isRequired
  };
  render() {
    const { children, actions, innerRef } = this.props;
    return (
      <Container innerRef={innerRef}>
        <Title>{children}</Title>
        <Actions>{actions}</Actions>
      </Container>
    );
  }
}
