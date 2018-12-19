import React from 'react';
import PropTypes from 'prop-types';

const defaultProps = {};
const propTypes = {
  children: PropTypes.any,
  className: PropTypes.any
};

const Typography = ({ children, className }) => {
  return <p className={classnames(className)}>{children}</p>;
};

export default Typography;
