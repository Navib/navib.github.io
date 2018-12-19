import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Card.scss';
import Button from '../Button';

const defaultProps = {
  width: '18rem',
  imageSrc: 'https://via.placeholder.com/286x180',
  imageAlt: 'demo image',
  cardTitle: 'Demo Card',
  cardText: 'Card Content Goes Here',
  buttonText: 'Click Me!'
};
const propTypes = {
  children: PropTypes.any,
  className: PropTypes.any,
  width: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  cardTitle: PropTypes.string,
  cardText: PropTypes.string,
  buttonText: PropTypes.string
};

const Card = ({
  children,
  className,
  width,
  imageSrc,
  imageAlt,
  cardTitle,
  cardText,
  buttonText
}) => {
  return (
    <div
      className={classnames(className, styles.card)}
      style={{ width: width }}
    >
      <img
        className={classnames(styles.cardImage)}
        src={imageSrc}
        alt={imageAlt}
      />
      <div className={classnames(styles.cardBody)}>
        <h5 className={styles.cardTitle}>{cardTitle}</h5>
        <p className="card-text">{cardText}</p>
        <Button>{buttonText}</Button>
      </div>
    </div>
  );
};

Card.defaultProps = defaultProps;
Card.propTypes = propTypes;

export default Card;
