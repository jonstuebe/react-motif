import React from "react";
import * as V from "victory";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
// import { linkTo } from "@storybook/addon-links";

import { BrowserRouter as Router } from "react-router-dom";

import { ThemeProvider } from "../theme";

import "../index.css";

import "react-virtualized/styles.css";
import { Column, Table } from "react-virtualized";

import Button from "../components/Button";
import Switch from "../components/Switch";
import Checkbox from "../components/Checkbox";

import AppBar from "../components/AppBar";

import Menu from "../components/Menu";
import MenuItem from "../components/MenuItem";
import MenuItemLink from "../components/MenuItemLink";

import Tag from "../components/Tag";

// import LineChart from "../components/charts/LineChart";

import DataList from "../components/DataList";
import DataListRow from "../components/DataListRow";
import DataListColumn from "../components/DataListColumn";
import DataListCell from "../components/DataListCell";

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

// storiesOf("LineChart", module).add("basic", () => <LineChart />);

import faker from "faker";
storiesOf("ReactVirtualizedTable", module).add("Table/Column", () => {
  let list = [];
  for (var i = 0; i < 10000; i++) {
    list.push({
      propertyId: faker.random.number(),
      streetAddress: faker.address.streetAddress(),
      city: faker.address.city(),
      state: faker.address.stateAbbr(),
      zip: faker.address.zipCode()
    });
  }

  return (
    <Table
      width={800}
      height={600}
      headerHeight={20}
      rowHeight={30}
      rowCount={list.length}
      rowGetter={({ index }) => list[index]}
    >
      <Column label="Property ID" dataKey="propertyId" width={150} />
      <Column label="Street Address" dataKey="streetAddress" width={200} />
      <Column label="City" dataKey="city" width={150} />
      <Column label="State" dataKey="state" width={70} />
      <Column label="ZIP" dataKey="zip" width={50} />
    </Table>
  );
});

storiesOf("DataListRow", module).add("basic", () => {
  let rows = [];
  for (var i = 0; i < 100; i++) {
    rows.push(
      <DataListRow>
        <DataListCell><Checkbox /></DataListCell>
        <DataListCell>{faker.random.number()}</DataListCell>
        <DataListCell>{faker.address.streetAddress()}</DataListCell>
        <DataListCell>{faker.address.city()}</DataListCell>
        <DataListCell>{faker.address.stateAbbr()}</DataListCell>
        <DataListCell>{faker.address.zipCode()}</DataListCell>
        <DataListCell><Tag>Vacant Unrented Ready</Tag></DataListCell>
        <DataListCell>$1,350</DataListCell>
      </DataListRow>
    );
  }

  return (
    <DataList height={600} striped hover fixed>
      {({ Table, Thead, Tbody }) =>
        <Table>
          <Thead>
            <DataListRow>
              <DataListColumn><Checkbox /></DataListColumn>
              <DataListColumn>Property ID</DataListColumn>
              <DataListColumn>Street Address</DataListColumn>
              <DataListColumn>City</DataListColumn>
              <DataListColumn>State</DataListColumn>
              <DataListColumn>ZIP</DataListColumn>
              <DataListColumn>Status</DataListColumn>
              <DataListColumn>Rent</DataListColumn>
            </DataListRow>
          </Thead>
          <Tbody>
            {rows}
          </Tbody>
        </Table>}
    </DataList>
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
