import React, { Component } from "react";
import PropTypes from "prop-types";
import { each } from "lodash";
import { withRouter, matchPath } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../theme";

import FillHeight from "../helpers/FillHeight";

import MenuGroupTitle from "./MenuGroupTitle";

const Container = styled(FillHeight)`
  background-color: ${colors.lightBlue};
  width: 390px;
  overflow-x: hidden;
  overflow-y: scroll;
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
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: null,
      children: []
    };
  }
  componentDidMount() {
    const activeGroup = this.findActiveGroup(this.props);
    if (activeGroup) {
      this.setChildren(activeGroup, this.props);
    }
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.location.pathname !== nextProps.location.pathname) {
      this.setState({ activeIndex: this.findActiveGroup(nextProps) });
    }
  }
  findActiveGroup = (props = null) => {
    if (!props) props = this.props;
    let activeParentIndex = null;
    each(props.children, (parentItem, index) => {
      if (!parentItem.props.to) {
        const isActive = this.isGroupActive(props.children[index], props);
        if (isActive) {
          activeParentIndex = index;
        }
      }
    });
    return activeParentIndex;
  };
  isGroupActive = (group, props = null) => {
    let active = false;
    each(group.props.children, (child, index) => {
      const match = this.isItemActive(child.props.to, props);
      if (match && match.isExact) {
        active = true;
      }
    });
    return active;
  };
  isItemActive = (to, props = null) => {
    if (!props) props = this.props;
    return matchPath(to, props.location.pathname);
  };
  setChildren = (groupIndex, props = null) => {
    if (!props) props = this.props;
    const activeGroup = props.children[groupIndex];
    this.setState({
      children: activeGroup.props.children,
      showChildren: true,
      groupTitle: activeGroup.props.title
    });
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
  handleFolderClick = (index, event) => {
    this.setState({
      children: this.props.children[index].props.children,
      groupTitle: this.props.children[index].props.title,
      showChildren: true
    });
    event.preventDefault();
  };
  render() {
    const { children } = this.props;
    return (
      <Container>
        <VisibleArea childrenVisible={this.isChildrenVisible()}>
          <ParentItems>
            {React.Children.map(children, (child, index) => {
              let passedProps = { active: false, index, parent: true };
              if (this.state.activeIndex && index === this.state.activeIndex) {
                passedProps.active = true;
              }
              if (!child.props.to) {
                passedProps.onClick = this.handleFolderClick.bind(this, index);
              }
              return React.cloneElement(child, passedProps);
            })}
          </ParentItems>
          <ChildItems>
            <MenuGroupTitle
              title={this.state.groupTitle}
              onClick={this.handleBack}
            />
            {React.Children.map(this.state.children, (child, index) => {
              return React.cloneElement(child, { child: true, index });
            })}
          </ChildItems>
        </VisibleArea>
      </Container>
    );
  }
}

export default withRouter(Menu);
