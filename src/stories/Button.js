import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { ThemeProvider as Theme } from "../theme";

import Button from "../components/Button";

storiesOf("Button", module)
  .add("default", () => (
    <Theme>
      <Button onClick={action("clicked")}>Hello Button</Button>
    </Theme>
  ))
  .add("primary", () => (
    <Theme>
      <Button onClick={action("clicked")} primary>
        Hello Button
      </Button>
    </Theme>
  ));
