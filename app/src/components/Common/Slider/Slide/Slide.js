import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const defaultProps = {};
const propTypes = {
  children: PropTypes.any,
  className: PropTypes.any
};

const Slide = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

Slide.defaultProps = defaultProps;
Slide.propTypes = propTypes;

export default Slide;
