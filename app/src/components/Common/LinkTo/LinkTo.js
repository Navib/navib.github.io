import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const defaultProps = {};
const propTypes = {
  children: PropTypes.any,
  to: PropTypes.any,
  className: PropTypes.any
};

const LinkTo = ({ children, to, className }) => {
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
};

LinkTo.defaultProps = defaultProps;
LinkTo.propTypes = propTypes;

export default LinkTo;
