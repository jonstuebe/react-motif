import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { colors } from "../theme";
import { mix } from "polished";

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
`;

// export class MenuItemChild extends Component {
//   static propTypes = {
//     active: PropTypes.bool,
//     title: PropTypes.string.isRequired,
//     description: PropTypes.string,
//     parentActive: PropTypes.bool.isRequired
//   };
//   render() {
//     const { title, description, parentActive, active } = this.props;
//     return (
//       <ChildItem active={active} onClick={this.onClick}>
//         <Title active={active}>{title}</Title>
//         <Description active={active}>
//           {description}
//         </Description>
//       </ChildItem>
//     );
//   }
// }

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
  static contextTypes = {
    setActiveGroup: PropTypes.func
  };
  onClick = event => {
    this.context.setActiveGroup(this.props);
    event.preventDefault();
  };
  render() {
    const { title, description, children, active } = this.props;
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
}

export default MenuItem;
