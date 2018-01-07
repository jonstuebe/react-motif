import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { ThemeProvider as Theme } from "../theme";

import AppBar from "../components/AppBar";
import ProfilePhoto from "../components/ProfilePhoto";

storiesOf("AppBar", module)
  .add("default", () => (
    <Theme>
      <AppBar left={"App"} />
    </Theme>
  ))
  .add("w/ right", () => (
    <Theme>
      <AppBar
        left={"App"}
        right={
          <ProfilePhoto
            image="https://www.gravatar.com/avatar/ca43155a79bd234200f52ea50193c4b6?s=200"
            style={{ marginTop: 5 }}
          />
        }
      />
    </Theme>
  ));
