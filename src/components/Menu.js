import React, { Component } from "react";
import PropTypes from "prop-types";
import { get, each, findIndex } from "lodash";
import { withRouter, matchPath } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../theme";

import MenuGroupTitle from "./MenuGroupTitle";

const Container = styled.div`
  background-color: ${colors.lightBlue};
  width: 390px;
  overflow-x: hidden;
  overlow-y: scroll;
`;

const VisibleArea = styled.div`
  width: ${390 * 2}px;
  display: flex;

  transition: all 250ms ease-in-out;
  transform: ${props =>
    !props.childrenVisible ? "translateX(0px)" : "translateX(-50%)"};
`;

const ParentItems = styled.div`
  flex: 1;
`;

const ChildItems = ParentItems.extend`

`;

class Menu extends Component {
  static childContextTypes = {
    setActiveGroup: PropTypes.func
  };
  getChildContext() {
    return {
      setActiveGroup: this.setActiveGroup
    };
  }
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: null,
      children: []
    };
  }
  componentDidMount() {
    this.setActiveChildren(this.props);
  }
  componentWillReceiveProps(nextProps) {
    this.setActiveChildren(nextProps);
  }
  setActiveGroup = props => {
    let activeIndex = null;
    each(this.props.children, (child, index) => {
      if (
        !child.props.to &&
        props.title === child.props.title &&
        props.description === child.props.description
      ) {
        activeIndex = index;
      }
    });
    if (activeIndex) {
      this.setState({ activeIndex, menuGroupTitle: props.title });
      this.setActiveChildren(this.props, activeIndex);
    }
  };
  setActiveChildren = (props, parentIndex) => {
    if (parentIndex) {
      this.setState({
        children: props.children[parentIndex].props.children,
        showChildren: true
      });
    } else {
      this.setState({ children: [], showChildren: false });
      each(props.children, child => {
        if (child.props.children) {
          let matched = false;
          each(child.props.children, grandChild => {
            const match = matchPath(
              grandChild.props.to,
              props.location.pathname
            );
            if (match && match.isExact) {
              matched = true;
            }
          });
          if (matched) {
            this.setState({
              children: child.props.children,
              showChildren: true
            });
          }
        }
      });
    }
  };
  isChildrenVisible = () => {
    if (this.state.showChildren) {
      return true;
    }
    return false;
  };
  handleBack = event => {
    this.setState({ showChildren: false });
    event.preventDefault();
  };
  render() {
    const { children } = this.props;
    return (
      <Container>
        <VisibleArea childrenVisible={this.isChildrenVisible()}>
          <ParentItems>
            {React.Children.map(children, (child, index) => {
              let passedProps = { active: false };
              if (this.state.activeIndex && index === this.state.activeIndex) {
                passedProps.active = true;
              }
              return React.cloneElement(child, passedProps);
            })}
          </ParentItems>
          <ChildItems>
            <MenuGroupTitle
              title={this.state.menuGroupTitle}
              onClick={this.handleBack}
            />
            {this.state.children}
          </ChildItems>
        </VisibleArea>
      </Container>
    );
  }
}

export default withRouter(Menu);
