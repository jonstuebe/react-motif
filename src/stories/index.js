import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import Button from "../components/Button";
import Switch from "../components/Switch";
import Checkbox from "../components/Checkbox";

storiesOf("Button", module)
  .add("with text", () =>
    <Button onClick={action("clicked")}>Hello Button</Button>
  )
  .add("with some emoji", () =>
    <Button onClick={action("clicked")}>😀 😎 👍 💯</Button>
  );

storiesOf("Switch", module)
  .add("uncontrolled", () => <Switch onChange={action("changed")} />)
  .add("uncontrolled w/ label", () =>
    <Switch onChange={action("changed")} label="Autosave" />
  )
  .add("default on", () =>
    <Switch onChange={action("changed")} defaultValue={true} />
  );

storiesOf("Checkbox", module)
  .add("uncontrolled", () => <Checkbox onChange={action("changed")} />)
  .add("uncontrolled w/ label", () =>
    <Checkbox onChange={action("changed")} label="Select All" />
  )
  .add("default on", () =>
    <Checkbox onChange={action("changed")} defaultValue={true} />
  );
