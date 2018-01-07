import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import faker from "faker";

import { ThemeProvider as Theme } from "../theme";

import Chevron from "../icons/Chevron";

storiesOf("Icons", module)
  .add("chevron right small", () => <Chevron direction="right" />)
  .add("chevron left small", () => <Chevron direction="left" />)
  .add("chevron right medium", () => (
    <Chevron direction="right" size="medium" />
  ))
  .add("chevron left medium", () => <Chevron direction="left" size="medium" />)
  .add("chevron right large", () => <Chevron direction="right" size="large" />)
  .add("chevron left large", () => <Chevron direction="left" size="large" />);
