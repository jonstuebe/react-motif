import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { ThemeProvider as Theme } from "../theme";

import Tag from "../components/Tag";

storiesOf("Tag", module).add("default", () => <Tag>Quam Nullam Malesuada</Tag>);
