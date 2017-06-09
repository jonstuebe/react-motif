import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { mix } from "polished";
import { colors } from "../theme";

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

const Item = styled.a`
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
const ItemLink = Item.withComponent("span");

const FolderIcon = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 10px;
`;

class MenuItem extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    children: PropTypes.node,
    active: PropTypes.bool
  };
  static defaultProps = {
    active: false
  };
  render() {
    const { title, description, children, active, to, onClick } = this.props;
    const folder = children ? true : false;
    let passedProps = { active };
    let ItemComponent = ItemLink;
    if (!to) {
      passedProps.folder = folder;
      passedProps.onClick = onClick;
      ItemComponent = Item;
    }
    return (
      <ItemComponent {...passedProps}>
        <Title active={active} folder={folder}>{title}</Title>
        <Description active={active} folder={folder}>
          {description}
        </Description>
        {children &&
          <FolderIcon active={active}>
            <Chevron direction="right" />
          </FolderIcon>}
      </ItemComponent>
    );
  }
}

export default MenuItem;
