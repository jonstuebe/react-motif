import React from "react";
import styled from "styled-components";

import FillHeight from "../helpers/FillHeight";

const Container = styled.section.attrs({
  className: "container"
})`
  height: 100%;
  display: flex;
  flex-direction: row;
`;

const Left = styled.div`
  width: 390px;
  flex: 0;
`;

const Center = styled.div`
  flex: 1;
`;

const Right = styled.div`

`;

export default ({ children }) =>
  <FillHeight>
    {children({ Container, Left, Center, Right })}
  </FillHeight>;
