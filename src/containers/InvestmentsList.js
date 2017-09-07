import React, { Component } from "react";
// import PropTypes from "prop-types";
import styled from "styled-components";
import faker from "faker";

import PageTitle from "../components/PageTitle";
import Button from "../components/Button";
import Tag from "../components/Tag";

import Table, { Cell, Column } from "./Table";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const FixedArea = styled.div`
  min-height: 60px;
`;

const FlexibleArea = styled.div`
  flex: 1;
  overflow: auto;
  height: ${props => props.height};
`;

export default class InvestmentsList extends Component {
  constructor(props) {
    super(props);
    let data = [];
    const statuses = [
      "Vacant Unrented Not Ready",
      "Notice Unrented Not Ready",
      "Notice Unrented Ready"
    ];
    for (var i = 0; i < 75; i++) {
      data.push({
        propertyId: faker.random.number(),
        streetAddress: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.stateAbbr(),
        zip: faker.address.zipCode(),
        status: statuses[Math.floor(Math.random() * statuses.length)]
      });
    }
    this.state = {
      data
    };
  }
  componentDidMount() {
    this.setState({
      flexibleAreaHeight: this.getFlexibleAreaHeight()
    });
  }
  getFlexibleAreaHeight = () => {
    let fixedSpace = 0;
    fixedSpace += 43; // @todo fix this
    fixedSpace += this.titleEl.clientHeight;
    return `calc(100vh - ${fixedSpace}px)`;
  };
  render() {
    return (
      <Container>
        <FixedArea>
          <PageTitle
            actions={<Button primary>Filters</Button>}
            innerRef={el => (this.titleEl = el)}
          >
            Investments
          </PageTitle>
        </FixedArea>
        <FlexibleArea height={this.state.flexibleAreaHeight}>
          <Table
            data={this.state.data}
            columns={this.state.columns}
            totalNum={this.state.data.length * 5}
            pagination={true}
          >
            <Column dataKey="propertyId" width={115}>Property ID</Column>
            <Column dataKey="streetAddress" width={225}>Street Address</Column>
            <Column dataKey="city" width={150}>City</Column>
            <Column dataKey="state" width={55}>State</Column>
            <Column dataKey="zip" width={100}>Zip</Column>
            <Column
              dataKey="status"
              width={225}
              cellRenderer={({ label, value }) =>
                <Cell>
                  <span className="mobile-label">{label}</span>
                  <Tag>{value}</Tag>
                </Cell>}
            >
              Status
            </Column>
          </Table>
        </FlexibleArea>
      </Container>
    );
  }
}
