import React from "react";
import * as V from "victory";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
// import { linkTo } from "@storybook/addon-links";

import { BrowserRouter as Router } from "react-router-dom";

import { ThemeProvider } from "../theme";

import "../index.css";

import faker from "faker";

import Button from "../components/Button";
import Switch from "../components/Switch";
import Checkbox from "../components/Checkbox";

import AppBar from "../components/AppBar";

import Menu from "../components/Menu";
import MenuItem from "../components/MenuItem";
import MenuItemLink from "../components/MenuItemLink";

import Tag from "../components/Tag";

import { Table, Column, Cell } from "../components/Table";

import Chevron from "../icons/Chevron";

import ProfilePhoto from "../components/ProfilePhoto";

storiesOf("AppBar", module)
  .add("default", () => <AppBar left={"atlas"} />)
  .add("w/ right", () =>
    <StoryContainer>
      <AppBar
        left={"atlas"}
        right={
          <ProfilePhoto
            image="https://www.gravatar.com/avatar/ca43155a79bd234200f52ea50193c4b6?s=200"
            style={{ marginTop: 5 }}
          />
        }
      />
    </StoryContainer>
  );

storiesOf("MenuItem", module)
  .add("default", () =>
    <MenuItem
      title="Investments"
      description="Lists, reports, and information pertaining to disposition"
    />
  )
  .add("folder", () =>
    <Router>
      <Menu>
        <MenuItem
          title="Investments"
          description="Lists, reports, and information pertaining to disposition"
        >
          <MenuItemLink
            title="Dashboard"
            description="Dashboard view of all current dispositions."
            to="/investments/dashboard"
          />
          <MenuItemLink
            title="List"
            description="List view of all current dispositions."
            to="/investments/list"
          />
          <MenuItemLink
            title="List"
            description="Reports view of all current dispositions."
            to="/investments/reports"
          />
        </MenuItem>
      </Menu>
    </Router>
  )
  .add("folder (active)", () =>
    <MenuItem
      title="Investments"
      description="Lists, reports, and information pertaining to disposition"
      folder
      active
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

storiesOf("Tag", module).add("default", () => <Tag>Vacant Unrented Ready</Tag>);

storiesOf("Table", module).add("basic", () => {
  let list = [];
  const statuses = [
    "Vacant Unrented Not Ready",
    "Notice Unrented Not Ready",
    "Notice Unrented Ready"
  ];
  for (var i = 0; i < 15; i++) {
    list.push({
      propertyId: faker.random.number(),
      streetAddress: faker.address.streetAddress(),
      city: faker.address.city(),
      state: faker.address.stateAbbr(),
      zip: faker.address.zipCode(),
      status: statuses[Math.floor(Math.random() * statuses.length)]
    });
  }

  return (
    <Table data={list} striped hover>
      <Column dataKey="propertyId" width={115}>Property ID</Column>
      <Column dataKey="streetAddress" width={225}>Street Address</Column>
      <Column dataKey="city" width={135}>City</Column>
      <Column dataKey="state" width={55}>State</Column>
      <Column dataKey="zip" width={100}>Zip</Column>
      <Column
        dataKey="status"
        width={225}
        cellRenderer={({ label, value }) =>
          <Cell>
            <span className="mobile-label">{label}</span><Tag>{value}</Tag>
          </Cell>}
      >
        Status
      </Column>
    </Table>
  );
});

storiesOf("Icons", module)
  .add("chevron right small", () => <Chevron direction="right" />)
  .add("chevron left small", () => <Chevron direction="left" />)
  .add("chevron right medium", () =>
    <Chevron direction="right" size="medium" />
  )
  .add("chevron left medium", () => <Chevron direction="left" size="medium" />)
  .add("chevron right large", () => <Chevron direction="right" size="large" />)
  .add("chevron left large", () => <Chevron direction="left" size="large" />);
