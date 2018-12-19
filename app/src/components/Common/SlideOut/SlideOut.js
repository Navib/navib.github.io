import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { IconContext } from 'react-icons';
import { FaBraille } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import Cell from '../Cell';
import GridX from '../GridX';
import styles from './SlideOut.scss';

const defaultProps = {};
const propTypes = {
  className: PropTypes.any,
  children: PropTypes.any
};

class SlideOut extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hidden: true
    };

    this.toggleSlideOut = this.toggleSlideOut.bind(this);
  }

  toggleSlideOut() {
    if (this.state.hidden) {
      this.setState({
        hidden: false
      });
    } else {
      this.setState({
        hidden: true
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <button
          className={classnames(styles.slideOutButton, this.props.className)}
          onClick={() => this.toggleSlideOut()}
        >
          <IconContext.Provider
            value={{
              size: '2.4rem',
              className: 'global-class-name'
            }}
          >
            <div>
              <FaBraille />
            </div>
          </IconContext.Provider>
        </button>
        <GridX
          className={classnames(
            styles.slideOutBody,
            !this.state.hidden ? styles.noWidth : ''
          )}
        >
          <Cell>
            <button
              onClick={() => this.toggleSlideOut()}
              className={styles.exitButton}
            >
              <IconContext.Provider
                value={{
                  size: '1.6rem',
                  className: 'global-class-name'
                }}
              >
                <IoMdClose />
              </IconContext.Provider>
            </button>

            {this.props.children}
          </Cell>
        </GridX>
      </React.Fragment>
    );
  }
}

SlideOut.defaultProps = defaultProps;
SlideOut.propTypes = propTypes;

export default SlideOut;
