import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { BrowserRouter as Router } from "react-router-dom";

import { ThemeProvider as Theme } from "../theme";

import Menu from "../components/Menu";
import MenuItem from "../components/MenuItem";
import MenuItemLink from "../components/MenuItemLink";

storiesOf("Menu", module).add("default", () => (
  <Router>
    <Menu>
      <MenuItem
        title="Menu Item"
        description="Aenean Cursus Tellus Pellentesque Vulputate"
      >
        <MenuItemLink
          title="Fermentum Ipsum"
          description="Tellus Mattis Pellentesque Vehicula Pharetra"
          to="/purus/consectetur"
        />
        <MenuItemLink
          title="Lorem Dolor"
          description="Inceptos Consectetur Condimentum Vulputate Purus."
          to="/purus/wollis"
        />
        <MenuItemLink
          title="Pharetra Pellentesque"
          description="Vestibulum Venenatis Vehicula Mollis Cursus"
          to="/purus/bibendum"
        />
      </MenuItem>
    </Menu>
  </Router>
));
