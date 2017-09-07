import styled from "styled-components";
import { colors } from "../../theme";
import { transparentize } from "polished";

import Cell from "./Cell";

const Column = Cell.extend`
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  position: relative;
  user-select: none;
  cursor: ${props => (props.onClick ? "pointer" : "default")};
`;

export default Column;
