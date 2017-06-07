import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
// import { linkTo } from "@storybook/addon-links";

import { ThemeProvider } from "../theme";

import Button from "../components/Button";
import Switch from "../components/Switch";
import Checkbox from "../components/Checkbox";
import AppBar from "../components/AppBar";
import Menu from "../components/Menu";
import MenuItem, { MenuItemChild } from "../components/MenuItem";

import Chevron from "../icons/Chevron";

import ProfilePhoto from "../components/ProfilePhoto";

storiesOf("AppBar", module)
  .add("default", () => <AppBar left={"atlas"} />)
  .add("w/ right", () =>
    <AppBar
      left={"atlas"}
      right={
        <ProfilePhoto
          image="https://www.gravatar.com/avatar/ca43155a79bd234200f52ea50193c4b6?s=200"
          style={{ marginTop: 5 }}
        />
      }
    />
  );

storiesOf("MenuItem", module)
  .add("default", () =>
    <MenuItem
      title="Investments"
      description="Lists, reports, and information pertaining to disposition"
    />
  )
  .add("folder", () =>
    <Menu>
      <MenuItem
        title="Investments"
        description="Lists, reports, and information pertaining to disposition"
        index={0}
      >
        <MenuItemChild
          title="List"
          description="List view of all current dispositions."
          index={0}
        />
        <MenuItemChild
          title="List"
          description="List view of all current dispositions."
          index={1}
        />
        <MenuItemChild
          title="List"
          description="List view of all current dispositions."
          index={2}
        />
      </MenuItem>
    </Menu>
  )
  .add("folder (active)", () =>
    <MenuItem
      title="Investments"
      description="Lists, reports, and information pertaining to disposition"
      folder
      active
    />
  );

storiesOf("Menu", module).add("default", () =>
  <Menu>
    <MenuItem
      title="Investments"
      description="Lists, reports, and information pertaining to dispositions."
      index={0}
    />
    <MenuItem
      title="Investments"
      description="Lists, reports, and information pertaining to dispositions."
      index={1}
    >
      <MenuItemChild
        title="List"
        description="List view of all current dispositions."
        index={0}
      />
      <MenuItemChild
        title="List"
        description="List view of all current dispositions."
        index={1}
      />
      <MenuItemChild
        title="List"
        description="List view of all current dispositions."
        index={2}
      />
    </MenuItem>
    <MenuItem
      title="Investments"
      description="Lists, reports, and information pertaining to dispositions."
      index={2}
    />
  </Menu>
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

storiesOf("Icons", module)
  .add("chevron right small", () => <Chevron direction="right" />)
  .add("chevron left small", () => <Chevron direction="left" />)
  .add("chevron right medium", () =>
    <Chevron direction="right" size="medium" />
  )
  .add("chevron left medium", () => <Chevron direction="left" size="medium" />)
  .add("chevron right large", () => <Chevron direction="right" size="large" />)
  .add("chevron left large", () => <Chevron direction="left" size="large" />);
