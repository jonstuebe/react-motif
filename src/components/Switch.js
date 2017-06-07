import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { colors, getColors } from "../theme";
import { lighten, darken, transparentize } from "polished";

const Checkbox = styled.input.attrs({
  type: "checkbox"
})`
  display: none;

  &:checked + .slider {
    background-color: ${colors.green};
  }

  &:focus + .slider {
    box-shadow: 0 2px 3px 0 ${transparentize(0.31, colors.darkBlue)};
  }

  &:checked + .slider:before {
    transform: translateX(18px);
  }
`;

const Container = styled.label`
  position: relative;
  display: inline-block;

  &:after {
    content: "";
    clear: both;
  }
`;

const Slider = styled.div.attrs({
  className: "slider"
})`
  width: 44px;
  height: 24px;
  position: relative;
  float: left;
  cursor: pointer;
  background-color: ${colors.darkBlue};
  transition: all .4s ease-in-out;
  border-radius: 22px;

  &:hover {
    box-shadow: 0 2px 3px 0 ${transparentize(0.31, colors.darkBlue)};
  }

  &:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 4px;
    bottom: 3px;
    background-color: white;
    transition: all 200ms linear;
    border-radius: 50%;
  }
`;

const Label = styled.span`
  margin-left: 5px;
  color: ${lighten(0.1, colors.darkBlue)};
  font-size: 14px;
  float: left;
  font-family: 'Lato', sans-serif;
  height: 24px;
  line-height: 24px;
  -webkit-font-smoothing: antialiased;
  user-select: none;
`;

export default class Switch extends Component {
  static propTypes = {
    onChange: PropTypes.func,
    label: PropTypes.string,
    value: PropTypes.bool,
    defaultValue: PropTypes.bool
  };
  constructor(props) {
    super(props);
    this.state = {};
    if (props.defaultValue) {
      this.state.value = props.defaultValue;
    }
  }
  onChange = event => {
    const { checked } = event.target;
    if (this.state.value) {
      this.setState({ value: checked });
    }
    if (this.props.onChange) this.props.onChange(checked);
  };
  getValue = () => {
    if (this.state.value) {
      return this.state.value || false;
    }
    return this.props.value;
  };
  render() {
    return (
      <Container>
        <Checkbox onChange={this.onChange} checked={this.getValue()} />
        <Slider />
        {this.props.label && <Label>{this.props.label}</Label>}
      </Container>
    );
  }
}
