import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { ThemeProvider as Theme } from "../theme";

import Checkbox from "../components/Checkbox";

storiesOf("Checkbox", module)
  .add("uncontrolled", () => <Checkbox onChange={action("changed")} />)
  .add("uncontrolled w/ label", () => (
    <Checkbox onChange={action("changed")} label="Select All" />
  ))
  .add("default on", () => (
    <Checkbox onChange={action("changed")} defaultValue={true} />
  ));
