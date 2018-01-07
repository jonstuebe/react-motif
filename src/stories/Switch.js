import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { ThemeProvider as Theme } from "../theme";

import Switch from "../components/Switch";

storiesOf("Switch", module)
  .add("uncontrolled", () => <Switch onChange={action("changed")} />)
  .add("uncontrolled w/ both labels", () => (
    <Switch onChange={action("changed")} label="Public" leftLabel="Private" />
  ))
  .add("uncontrolled w/ label", () => (
    <Switch onChange={action("changed")} label="Autosave" />
  ))
  .add("default on", () => (
    <Switch onChange={action("changed")} defaultValue={true} />
  ));
