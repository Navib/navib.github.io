import React from "react";
import PropTypes from "prop-types";

import GridContainer from "./Common/GridContainer";
import GridX from "./Common/GridX";
import Cell from "./Common/Cell";

export default ({ children, history }) => {
  return (
    <GridContainer gridWidth="fluid">
      <GridX>
        <Cell className="large-8 medium-8 small-12">{children}</Cell>
      </GridX>
    </GridContainer>
  );
};
