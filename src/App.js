import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import AppLayout from "./components/AppLayout";
import AppBar from "./components/AppBar";
import Menu from "./components/Menu";
import MenuItemLink from "./components/MenuItemLink";
import MenuItem from "./components/MenuItem";

import PropertiesContainer from "./containers/PropertiesContainer";

class App extends Component {
  render() {
    return (
      <Router>
        <AppLayout>
          {({ Container, Left, Center, Right }) =>
            <div>
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
                      title="Properties List"
                      description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                    >
                      <MenuItemLink
                        title="Properties List"
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                        to="/properties/list"
                      />
                      <MenuItemLink
                        title="Properties Test"
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                        to="/properties/test"
                      />
                    </MenuItem>
                  </Menu>
                </Left>
                <Center>
                  <Route
                    path="/properties/:page"
                    component={PropertiesContainer}
                  />
                </Center>
              </Container>
            </div>}
        </AppLayout>
      </Router>
    );
  }
}

export default App;
