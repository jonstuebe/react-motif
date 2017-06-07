import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { colors } from "../theme";
import { lighten, darken } from "polished";

const StyledCheckbox = styled.div`
  position: relative;
  width: 15px;
  height: 15px;
  float: left;
  background: rgba(216,216,216,0.08);
  border: 1px solid rgba(151,151,151,0.58);
  border-radius: 3px;

  &:hover {
    border: 1px solid rgba(115,115,115,0.58);
    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.10), inset 0 1px 3px 0 rgba(0,0,0,0.06);
  }
`;

const Input = styled.input`
  display: none;
  &:focus + .checkbox {

  }
  &:checked + .checkbox {
    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.10), inset 0 1px 3px 0 rgba(0,0,0,0.06);
    border: 1px solid rgba(115,115,115,0.58);
  }
  &:checked + .checkbox:before {
    content: "";
    position: absolute;
    top: -1px;
    left: 2px;
    width: 11px;
    height: 16.27px;
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='59' viewBox='0 0 80 59'><path fill='#5A5A5A' d='M30.3 58.2L.8 28.7c-.4-.4-.4-1 0-1.4l8.5-8.5c.4-.4 1-.4 1.4 0L31 39.1 69.2.9c.4-.4 1-.4 1.4 0l8.5 8.5c.4.4.4 1 0 1.4L31.7 58.2c-.4.4-1 .4-1.4 0z'/></svg>");
    background-size: 11px 16.27px;
    background-repeat: no-repeat;
    z-index: 5;
  }
`;

const Label = styled.span`
  margin-left: 7px;
  color: ${lighten(0.1, colors.darkBlue)};
  font-size: 14px;
  float: left;
  font-family: 'Lato', sans-serif;
  height: 15px;
  line-height: 15px;
  -webkit-font-smoothing: antialiased;
  user-select: none;
`;

const Container = styled.label`
  display: inline-block;
  position: relative;
`;

export default class Checkbox extends Component {
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
        <Input
          type="checkbox"
          onChange={this.onChange}
          checked={this.getValue()}
        />
        <StyledCheckbox className="checkbox" />
        {this.props.label && <Label>{this.props.label}</Label>}
      </Container>
    );
  }
}
