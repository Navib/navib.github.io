import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import styles from "./ListGroupItem.scss";
import Button from "../../Button";
import Anchor from "../../Anchor";

const defaultProps = {
  button: false,
  anchor: false
};
const propTypes = {
  children: PropTypes.any,
  className: PropTypes.any,
  button: PropTypes.any,
  anchor: PropTypes.any,
  flush: PropTypes.any
};

class ListGroupItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
    this.renderListItem = this.renderListItem.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  onMouseOver() {
    this.setState({
      active: true
    });
  }

  onMouseLeave() {
    this.setState({
      active: false
    });
  }

  renderListItem(button, anchor, className, children, flush) {
    if (button) {
      return (
        <Button
          className={classnames(
            styles.listGroupItem,
            className,
            this.state.active ? styles.activeItem : null,
            flush ? styles.flushItem : null
          )}
          onMouseOver={() => this.onMouseOver()}
          onMouseLeave={() => this.onMouseLeave()}
        >
          {children}
        </Button>
      );
    } else if (anchor) {
      return (
        <Anchor
          className={classnames(
            styles.listGroupItem,
            className,
            this.state.active ? styles.activeItem : null,
            flush ? styles.flushItem : null
          )}
          onMouseOver={() => this.onMouseOver()}
          onMouseLeave={() => this.onMouseLeave()}
        >
          {children}
        </Anchor>
      );
    }

    return (
      <li
        className={classnames(
          styles.listGroupItem,
          className,
          this.state.active ? styles.activeItem : null,
          flush ? styles.flushItem : null
        )}
        onMouseOver={() => this.onMouseOver()}
        onMouseLeave={() => this.onMouseLeave()}
      >
        {children}
      </li>
    );
  }
  render() {
    const { button, anchor, className, children, flush } = this.props;
    return (
      <React.Fragment>
        {this.renderListItem(button, anchor, className, children, flush)}
      </React.Fragment>
    );
  }
}

ListGroupItem.defaultProps = defaultProps;
ListGroupItem.propTypes = propTypes;

export default ListGroupItem;
