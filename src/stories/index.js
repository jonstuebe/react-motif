import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
// import { linkTo } from "@storybook/addon-links";

import { ThemeProvider } from "../theme";

import Button from "../components/Button";
import Switch from "../components/Switch";
import Checkbox from "../components/Checkbox";
import AppBar from "../components/AppBar";

import ProfilePhoto from "../components/ProfilePhoto";

storiesOf("AppBar", module)
  .add("default", () => <AppBar left={"atlas"} />)
  .add("w/ right", () =>
    <AppBar
      left={"atlas"}
      right={
        <ProfilePhoto
          image="https://scontent.fphx1-1.fna.fbcdn.net/v/t1.0-9/1920188_645159974999_342141418_n.jpg?oh=89e710f62ab59225d7b659e9a6a10166&oe=59A7C0DB"
          style={{ marginTop: 5 }}
        />
      }
    />
  );

storiesOf("Button", module)
  .add("default", () =>
    <ThemeProvider>
      <Button onClick={action("clicked")}>Hello Button</Button>
    </ThemeProvider>
  )
  .add("primary", () =>
    <ThemeProvider>
      <Button onClick={action("clicked")} primary>Hello Button</Button>
    </ThemeProvider>
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
