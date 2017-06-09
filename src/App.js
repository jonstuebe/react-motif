import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AppLayout from "./components/AppLayout";
import AppBar from "./components/AppBar";
import Menu from "./components/Menu";
import MenuItemLink from "./components/MenuItemLink";
import MenuItem from "./components/MenuItem";

import FillHeight from "./helpers/FillHeight";

import PropertiesContainer from "./containers/PropertiesContainer";

class App extends Component {
  render() {
    return (
      <Router>
        <AppLayout>
          {({ Container, Left, Center, Right }) =>
            <FillHeight>
              <AppBar left="atlas" />
              <Container>
                <Left>
                  <Menu>
                    <MenuItemLink
                      title="Properties Dashboard"
                      description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                      to="/properties/dashboard"
                    />
                    <MenuItem
                      title="Investments"
                      description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                    >
                      <MenuItemLink
                        title="List View"
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                        to="/investments/list"
                      />
                      <MenuItemLink
                        title="Reports"
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                        to="/investments/reports"
                      />
                    </MenuItem>
                  </Menu>
                </Left>
                <Center>
                  <Switch>
                    <Route
                      path="/investments/:page"
                      component={PropertiesContainer}
                    />
                    <Route
                      path="/properties/:page"
                      component={PropertiesContainer}
                    />
                  </Switch>
                </Center>
              </Container>
            </FillHeight>}
        </AppLayout>
      </Router>
    );
  }
}

export default App;
