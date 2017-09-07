import React, { Component } from "react";
import {
  VictoryBar,
  VictoryTransition,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryStack,
  VictoryZoomContainer,
  VictoryContainer,
  VictoryBrushContainer,
  VictoryLine,
  VictoryToolip,
  VictoryPie
} from "victory";

export default () =>
  <VictoryPie
    data={[
      {
        type: "vacant",
        num: 2014
      },
      {
        type: "occupied",
        num: 32645
      }
    ]}
    x="type"
    y="num"
    padding={40}
    labels={d => d.x}
    animate={{
      onLoad: { duration: 500, before: () => ({ y: 0 }) }
    }}
  />;
