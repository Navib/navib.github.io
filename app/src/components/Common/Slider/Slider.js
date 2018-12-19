import React, { Component } from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Slide from './Slide';

const defaultProps = {
  accessibility: true,
  adaptiveHeight: false,
  arrows: true,
  autoplaySpeed: 3000,
  centerMode: false,
  autoplay: false,
  focusOnSelect: false,
  draggable: true,
  easing: 'linear',
  infinite: true,
  focusOnSelect: false,
  pauseOnDotsHover: false,
  pauseOnFocus: false,
  pauseOnHover: true,
  swipeToSlide: false,
  centerPadding: '50px',
  dotsClass: 'slick-dots',
  initialSlide: 0,
  rows: 1,
  slidesPerRow: 1,
  rtl: false,
  vertical: false,
  variableWidth: false,
  slidesToScroll: 1,
  slidesToShow: 1,
  speed: 500,
  lazyLoad: false,
  dots: true,
  sliderTitle: null,
  appendDots: dots => <ul>{dots}</ul>,
  customPaging: i => <button>{i + 1}</button>
};
const propTypes = {
  className: PropTypes.any,
  sliderTitle: PropTypes.any,
  children: PropTypes.any,
  accessibility: PropTypes.any,
  adaptiveHeight: PropTypes.any,
  slidesPerRow: PropTypes.any,
  arrows: PropTypes.any,
  autoplaySpeed: PropTypes.any,
  centerMode: PropTypes.any,
  autoplay: PropTypes.any,
  focusOnSelect: PropTypes.any,
  draggable: PropTypes.any,
  easing: PropTypes.any,
  fade: PropTypes.any,
  dots: PropTypes.any,
  infinite: PropTypes.any,
  focusOnSelect: PropTypes.any,
  pauseOnDotsHover: PropTypes.any,
  pauseOnFocus: PropTypes.any,
  pauseOnHover: PropTypes.any,
  centerPadding: PropTypes.any,
  dotsClass: PropTypes.any,
  initialSlide: PropTypes.any,
  rows: PropTypes.any,
  rtl: PropTypes.any,
  vertical: PropTypes.any,
  speed: PropTypes.any,
  slidesToScroll: PropTypes.any,
  variableWidth: PropTypes.any,
  slidesToShow: PropTypes.any,
  speed: PropTypes.any,
  swipeToSlide: PropTypes.any,
  lazyLoad: PropTypes.any,
  appendDots: PropTypes.any,
  customPaging: PropTypes.any
};

export default class SimpleSlider extends Component {
  render() {
    const {
      className,
      children,
      sliderTitle,
      accessibility,
      adaptiveHeight,
      arrows,
      autoplaySpeed,
      centerMode,
      autoplay,
      draggable,
      easing,
      fade,
      infinite,
      rtl,
      focusOnSelect,
      dots,
      centerPadding,
      dotsClass,
      initialSlide,
      vertical,
      speed,
      slidesToScroll,
      slidesToShow,
      pauseOnDotsHover,
      pauseOnFocus,
      slidesPerRow,
      pauseOnHover,
      rows,
      swipeToSlide,
      variableWidth,
      lazyLoad,
      appendDots,
      customPaging
    } = this.props;
    return (
      <div>
        {sliderTitle !== null && <h2>{sliderTitle}</h2>}
        <Slider
          className={className}
          accessibility={accessibility}
          adaptiveHeight={adaptiveHeight}
          arrows={arrows}
          autoplaySpeed={autoplaySpeed}
          centerMode={centerMode}
          autoplay={autoplay}
          focusOnSelect={focusOnSelect}
          draggable={draggable}
          easing={easing}
          fade={fade}
          infinite={infinite}
          focusOnSelect={focusOnSelect}
          centerPadding={centerPadding}
          dotsClass={dotsClass}
          initialSlide={initialSlide}
          vertical={vertical}
          speed={speed}
          lazyLoad={lazyLoad}
          slidesToScroll={slidesToScroll}
          slidesToShow={slidesToShow}
          pauseOnDotsHover={pauseOnDotsHover}
          rows={rows}
          rtl={rtl}
          swipeToSlide={swipeToSlide}
          variableWidth={variableWidth}
          dots={dots}
          slidesPerRow={slidesPerRow}
          swipe
          touchMove
          useCSS
          useTransform
          appendDots={appendDots}
          customPaging={customPaging}
        >
          {children}
        </Slider>
      </div>
    );
  }
}

SimpleSlider.defaultProps = defaultProps;
SimpleSlider.propTypes = propTypes;
