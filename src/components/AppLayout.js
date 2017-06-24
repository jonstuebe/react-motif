import React from "react";
import styled from "styled-components";

const Container = styled.section.attrs({
  className: "container"
})`
  height: calc(100vh - 43px);
  overflow: hidden;
  display: flex;
  flex-direction: row;
`;

const Left = styled.div`
  width: 390px;
  flex: 0;
`;

const Center = styled.div`
  flex: 1;
  overflow: auto;
`;

const Right = styled.div`

`;

export default ({ children }) =>
  <div>
    {children({ Container, Left, Center, Right })}
  </div>;
