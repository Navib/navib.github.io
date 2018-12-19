import React from "react";
import PropTypes from "prop-types";
import styles from "./ModalHeader.scss";
import { IoMdClose } from "react-icons/io";

const defaultProps = {};
const propTypes = {
  children: PropTypes.any,
  exitModal: PropTypes.any
};

const ModalHeader = ({ children, exitModal }) => {
  return (
    <div className={styles.modalHeader}>
      <h5 className={styles.modalTitle} id="exampleModalLabel">
        Modal title
      </h5>
      <button
        type="button"
        className={styles.close}
        data-dismiss="modal"
        aria-label="Close"
        onClick={() => exitModal()}
      >
        <span aria-hidden="true">
          <IoMdClose />
        </span>
      </button>
      <div>{children}</div>
    </div>
  );
};

ModalHeader.defaultProps = defaultProps;
ModalHeader.propTypes = propTypes;

export default ModalHeader;
