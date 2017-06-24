import styled from "styled-components";
import { colors, fonts } from "../theme";

export default styled.div`
  font-family: ${fonts.fontFamily};
  -webkit-font-smoothing: ${fonts.fontSmoothing};
  display: inline-block;
  border-radius: 3px;
  background-color: ${colors.lightBlue};
  color: ${colors.darkBlue};
  text-transform: uppercase;
  font-size: 11px;
  font-weight: bold;
  padding: 5px 8px;
`;
