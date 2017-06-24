import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { lighten, darken } from "polished";
import { colors } from "../theme";

import Chevron from "../icons/Chevron";

const DEFAULT_PER_PAGE = 75;

const Container = styled.div`
  border-bottom: 1px solid ${colors.lightBlue};
  padding: 10px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: default;
  user-select: none;
`;

const TextDescription = styled.div`
  color: ${colors.darkBlue};
  font-size: 13px;
  -webkit-font-smoothing: antialiased;
`;

const PageBtns = styled.div`
  display: flex;
  margin: 0 -1px;
`;

const PageBtn = styled.div`
  -webkit-font-smoothing: antialiased;
  padding: 5px 10px;
  margin: 0;
  font-weight: bold;
  font-size: 12px;
  border-radius: 3px;
  background-color: ${props => (props.active ? colors.darkBlue : "")};
  margin: 0 1px;
  opacity: ${props => (props.disabled ? 0.4 : 1)};
  pointer-events: ${props => (props.disabled || props.active ? "none" : "")};
  cursor: ${props => (props.active ? "default" : "pointer")};
  color: ${props => (props.active ? "#fff" : darken(0.2, colors.lightGrey))};

  &:hover {
    ${props => {
      if (!props.active) {
        return `
          color: #fff;
          background-color: ${lighten(0.1, colors.darkBlue)};

          svg {
            fill: #fff;
          }
        `;
      }
    }}
  }
`;

export default class Pagination extends Component {
  static propTypes = {
    totalNum: PropTypes.number.isRequired,
    numResults: PropTypes.number.isRequired,
    curPage: PropTypes.number,
    perPage: PropTypes.number
  };
  constructor(props) {
    super(props);
    this.state = {
      pages: this.buildPages(props)
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      pages: this.buildPages(nextProps)
    });
  }
  buildPages = (props = null) => {
    if (!props) props = this.props;
    const { totalNum, perPage = DEFAULT_PER_PAGE } = props;
    let pages = [];
    for (let i = 1; i <= Math.ceil(totalNum / perPage); i++) {
      pages.push(i);
    }
    return pages;
  };
  handlePageChange = page => {
    console.log({ page });
  };
  render() {
    const {
      totalNum,
      numResults,
      curPage = 1,
      perPage = DEFAULT_PER_PAGE
    } = this.props;
    const totalPages = Math.ceil(totalNum / perPage);
    return (
      <Container>
        <TextDescription
        >{`${numResults} of ${totalNum} results displayed`}</TextDescription>
        <PageBtns>
          <PageBtn
            disabled={curPage === 1}
            onClick={this.handlePageChange.bind(null, curPage - 1)}
          >
            <Chevron
              direction="left"
              style={{ top: 2, position: "relative" }}
            />
          </PageBtn>
          {this.state.pages.map((page, index) => {
            return (
              <PageBtn
                onClick={this.handlePageChange.bind(null, page)}
                active={page === curPage}
                key={`pagination-page-${index}`}
              >
                {page}
              </PageBtn>
            );
          })}
          <PageBtn
            onClick={this.handlePageChange.bind(null, curPage + 1)}
            disabled={curPage === totalPages}
          >
            <Chevron
              direction="right"
              style={{ top: 2, position: "relative" }}
            />
          </PageBtn>
        </PageBtns>
      </Container>
    );
  }
}
