import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { colors } from "../theme";

const Container = styled.div`
  background-color: ${colors.lightBlue};
`;

export default class Menu extends Component {
  static childContextTypes = {
    menuActiveIndex: PropTypes.object,
    setActiveMenuItem: PropTypes.func
  };
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: null
    };
  }
  getChildContext() {
    return {
      menuActiveIndex: {
        parent: this.state.parentIndex,
        child: this.state.childIndex
      },
      setActiveMenuItem: this.setActive
    };
  }
  setActive = (activeIndex, type = "parent") => {
    this.setState(prevState => {
      if (type === "parent") {
        prevState.parentIndex = activeIndex;
      } else {
        prevState.childIndex = activeIndex;
      }
      return prevState;
    });
  };
  render() {
    const { children } = this.props;
    return (
      <Container>
        {children}
      </Container>
    );
  }
}
