import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const defaultProps = {};
const propTypes = {
  children: PropTypes.any,
  className: PropTypes.any,
  cellSize: PropTypes.oneOf(['auto', 'shrink']),
  offset: PropTypes.any
};

const Cell = ({ className, children, cellSize, offset }) => {
  return (
    <div className={classnames('cell', className, cellSize, offset)}>
      {children}
    </div>
  );
};

Cell.defaultProps = defaultProps;
Cell.propTypes = propTypes;

export default Cell;
