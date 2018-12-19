import React from 'react';
import PropTypes from 'prop-types';
import styles from './ModalBody.scss';

const defaultProps = {
  children: 'Body Content'
};
const propTypes = {
  children: PropTypes.any
};

const ModalBody = ({ children }) => {
  return <div className={styles.modalBody}>{children}</div>;
};

ModalBody.defaultProps = defaultProps;
ModalBody.propTypes = propTypes;

export default ModalBody;
