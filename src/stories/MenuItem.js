import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { ThemeProvider as Theme } from "../theme";

import MenuItem from "../components/MenuItem";

storiesOf("MenuItem", module).add("default", () => (
  <Theme>
    <MenuItem
      title="Menu Item"
      description="Aenean Cursus Tellus Pellentesque Vulputate"
    />
  </Theme>
));
