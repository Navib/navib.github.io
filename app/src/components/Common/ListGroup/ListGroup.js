import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import styles from "./ListGroup.scss";

const defaultProps = {};
const propTypes = {
  className: PropTypes.any,
  children: PropTypes.any
};

const ListGroup = ({ children, className }) => {
  return (
    <ul className={classnames(className, styles.listGroup)}>{children}</ul>
  );
};

ListGroup.defaultProps = defaultProps;
ListGroup.propTypes = propTypes;

export default ListGroup;
