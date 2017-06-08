import React from "react";
import styled from "styled-components";

const Container = styled.section`
  display: 'flex';
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 390px;
`;

const Center = styled.div`
  flex: 1;
`;

const Right = styled.div`

`;

export default ({ children }) =>
  <div>
    {children({ Container, Left, Center, Right })}
  </div>;
