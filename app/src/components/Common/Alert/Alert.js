import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import styles from "./Alert.scss";

const defaultProps = {};
const propTypes = {
  children: PropTypes.any,
  className: PropTypes.any,
  variation: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark"
  ]),
  alertHeading: PropTypes.string
};

const Alert = ({ children, className, variation, alertHeading }) => {
  return (
    <div
      className={classnames(
        className,
        "alert",
        styles[variation],
        styles.alert
      )}
      role="alert"
    >
      <h4 className={styles.alertHeading}>{alertHeading}</h4>
      {children}
    </div>
  );
};

Alert.defaultProps = defaultProps;
Alert.propTypes = propTypes;

export default Alert;
