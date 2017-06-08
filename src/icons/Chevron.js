import React from "react";
import styled from "styled-components";

const getSize = props => {
  const ratio = props.width / props.height;
  let width;
  let height;
  switch (props.size) {
    case "small":
      width = 7;
      break;
    case "medium":
      width = 15;
      break;
    case "large":
      width = 30;
      break;
    default:
      width = props.width;
  }
  height = `${width / ratio}px`;
  width = `${width}px`;
  return { width, height };
};
const SvgWrapper = styled.div`

  width: ${props => {
    return getSize(props).width;
  }};
  height: ${props => {
    return getSize(props).height;
  }};
  position: relative;
  display: inline-block;

  svg {
    width: ${props => {
      return getSize(props).width;
    }};
    height: ${props => {
      return getSize(props).height;
    }};
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }
`;

export default ({ direction, size = "small" }) =>
  <SvgWrapper size={size} width={7} height={11.9}>
    {direction === "right" &&
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="8"
        height="13"
        viewBox="0 0 8 13"
      >
        <path
          d="M.5 1.754875L1.67760417.55 7.5 6.5l-5.82239583 5.95L.5 11.245125 5.14114583 6.5"
          opacity=".27383379"
        />
      </svg>}
    {direction === "left" &&
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="8"
        height="13"
        viewBox="0 0 8 13"
      >
        <path
          d="M7.5 11.245125L6.32239583 12.45.5 6.5 6.32239583.55 7.5 1.754875 2.85885417 6.5"
          opacity=".27383379"
        />
      </svg>}
  </SvgWrapper>;
