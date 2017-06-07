import React from "react";
import styled from "styled-components";
import { colors } from "../theme";

import Logo from "./Logo";

const Container = styled.div`
  background-color: ${colors.darkBlue};
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: stretch;
  height: 43px;
  position: relative;
`;

const Left = styled.div`
  padding-left: 15px;
`;

const Center = styled.div`

`;

const Right = styled.div`
  padding-right: 10px;
`;

const StyledLogo = styled(Logo)`
  margin-top: 8px;
`;

export default ({ left, center, right }) =>
  <Container>
    <Left>
      {typeof left === "string" ? <StyledLogo>{left}</StyledLogo> : left}
    </Left>
    <Center>{center}</Center>
    <Right>{right}</Right>
  </Container>;
