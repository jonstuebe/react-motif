import React, { Component } from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";
import { colors } from "../theme";
import { mix, darken, transparentize } from "polished";
import classNames from "classnames";

import Chevron from "../icons/Chevron";

const Title = styled.h3`
  font-family: 'Lato', sans-serif;
  font-weight: bold;
  font-size: 16px;
  margin: 0 0 3px 0;
  padding: 0;
  color: ${colors.darkBlue};
  -webkit-font-smoothing: antialiased;
`;
const Description = styled.p`
  font-family: 'Lato', sans-serif;
  font-size: 14px;
  margin: 0;
  color: ${colors.darkBlue};
  -webkit-font-smoothing: antialiased;
  transition: all 275ms ease-in-out;

`;

const Item = styled.div`
  list-style-type: none;
  margin: 0;
  padding: 19px 16px;
  transition: all 175ms ease-in-out;
  cursor: pointer;
  display: block;
  position: relative;

  background-color: ${props =>
    props.active ? mix(0.92, colors.lightBlue, colors.darkBlue) : ""};
  background-color: ${props =>
    props.active && props.children
      ? mix(0.8, colors.lightBlue, colors.darkBlue)
      : ""};

  &:hover {
    background-color: ${mix(0.92, colors.lightBlue, colors.darkBlue)};
    background-color: ${props =>
      props.active && props.children
        ? mix(0.8, colors.lightBlue, colors.darkBlue)
        : ""};
  }
`;

const ChildItem = styled(Item)`
  display: ${props => (props.parentActive ? "block" : "none")};
  background-color: ${props =>
    props.active ? mix(0.92, colors.lightBlue, colors.darkBlue) : ""};

  &:hover {
    background-color: ${mix(0.92, colors.lightBlue, colors.darkBlue)};
  }
`;

const FolderIcon = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transition: transform 250ms ease-in-out;
  transform: translateY(-50%)${props => (props.active ? " rotate(90deg)" : "")};
`;

export class MenuItemChild extends Component {
  static propTypes = {
    index: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    parentActive: PropTypes.bool.isRequired
  };
  static contextTypes = {
    menuActiveIndex: PropTypes.object,
    setActiveMenuItem: PropTypes.func
  };
  constructor(props) {
    super(props);
    this.state = {
      active: props.active || false
    };
  }
  onClick = event => {
    if (this.props.onClick)
      this.props.onClick({
        title: this.props.title,
        description: this.props.description,
        index: this.props.index,
        active: this.state.active
      });
    if (this.props.index !== this.context.menuActiveIndex.child) {
      this.context.setActiveMenuItem(this.props.index, "child");
    } else {
      this.context.setActiveMenuItem(null, "child");
    }
    event.preventDefault();
  };
  isActive = () => {
    return this.props.index === this.context.menuActiveIndex.child
      ? true
      : false;
  };
  render() {
    const { title, description, parentActive } = this.props;
    const active = this.isActive();
    return (
      <ChildItem
        active={active}
        onClick={this.onClick}
        parentActive={parentActive}
      >
        <Title active={active}>{title}</Title>
        <Description active={active}>
          {description}
        </Description>
      </ChildItem>
    );
  }
}

export default class MenuItem extends Component {
  static propTypes = {
    index: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    children: PropTypes.node
  };
  static defaultProps = {
    active: false
  };
  static contextTypes = {
    menuActiveIndex: PropTypes.object,
    setActiveMenuItem: PropTypes.func
  };
  constructor(props) {
    super(props);
    this.state = {
      active: props.active || false
    };
  }
  onClick = event => {
    if (this.props.onClick)
      this.props.onClick({
        index: this.props.index,
        title: this.props.title,
        description: this.props.description,
        active: this.state.active
      });
    if (this.props.index !== this.context.menuActiveIndex.parent) {
      this.context.setActiveMenuItem(this.props.index);
      this.context.setActiveMenuItem(null, "child");
    } else {
      this.context.setActiveMenuItem(null);
    }
    event.preventDefault();
  };
  isActive = () => {
    return this.props.index === this.context.menuActiveIndex.parent
      ? true
      : false;
  };
  renderItem() {
    const { title, description, folder, children } = this.props;
    const active = this.isActive();
    return (
      <Item
        active={active}
        folder={children ? true : false}
        onClick={this.onClick}
      >
        <Title active={active} folder={children ? true : false}>{title}</Title>
        <Description active={active} folder={children ? true : false}>
          {description}
        </Description>
        {children &&
          <FolderIcon active={active}>
            <Chevron direction="right" />
          </FolderIcon>}
      </Item>
    );
  }
  render() {
    return this.props.children
      ? <span>
          {this.renderItem()}
          {React.Children.map(this.props.children, child => {
            return React.cloneElement(child, {
              parentActive: this.isActive()
            });
          })}
        </span>
      : this.renderItem();
  }
}
