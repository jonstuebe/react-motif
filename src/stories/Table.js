import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import faker from "faker";

import { ThemeProvider as Theme } from "../theme";

import Tag from "../components/Tag";
import { Table, Column, Cell } from "../components/Table";

storiesOf("Table", module).add("basic", () => {
  let list = [];
  const statuses = ["Vacant", "Under Renovation", "On The Market"];
  for (var i = 0; i < 15; i++) {
    list.push({
      homeId: faker.random.number(),
      streetAddress: faker.address.streetAddress(),
      city: faker.address.city(),
      state: faker.address.stateAbbr(),
      zip: faker.address.zipCode(),
      status: statuses[Math.floor(Math.random() * statuses.length)]
    });
  }

  return (
    <Table data={list} striped hover>
      <Column dataKey="homeId" width={115}>
        Property ID
      </Column>
      <Column dataKey="streetAddress" width={225}>
        Street Address
      </Column>
      <Column dataKey="city" width={135}>
        City
      </Column>
      <Column dataKey="state" width={55}>
        State
      </Column>
      <Column dataKey="zip" width={100}>
        Zip
      </Column>
      <Column
        dataKey="status"
        width={225}
        cellRenderer={({ label, value }) => (
          <Cell>
            <span className="mobile-label">{label}</span>
            <Tag>{value}</Tag>
          </Cell>
        )}
      >
        Status
      </Column>
    </Table>
  );
});
