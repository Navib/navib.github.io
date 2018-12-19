import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import Button from "../Button";
import styles from "./Modal.scss";
import ModalHeader from "./ModalHeader";
import ModalBody from "./ModalBody";
import ModalFooter from "./ModalFooter";

const defaultProps = {};
const propTypes = {
  children: PropTypes.any,
  className: PropTypes.any
};

class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false
    };

    this.showModal = this.showModal.bind(this);
    this.exitModal = this.exitModal.bind(this);
  }

  showModal() {
    this.setState({
      show: true
    });
  }

  exitModal() {
    this.setState({
      show: false
    });
  }

  render() {
    return (
      <Fragment>
        <Button
          type="button"
          data-toggle="modal"
          data-target="#exampleModal"
          onClick={() => this.showModal()}
        >
          Launch demo modal
        </Button>

        <div
          className={classnames(
            styles.modal,
            styles.fade,
            this.state.show ? styles.show : null
          )}
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div
            className={classnames(
              styles.modalDialog,
              this.state.show ? styles.modalDialogShow : null
            )}
            role="document"
          >
            <div className={styles.modalContent}>
              <ModalHeader exitModal={this.exitModal} />
              <ModalBody />
              <ModalFooter exitModal={this.exitModal} />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

Modal.defaultProps = defaultProps;
Modal.propTypes = propTypes;

export default Modal;
