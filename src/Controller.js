import React from "react";
import PropTypes from "prop-types";

const Controller = props => {
  const {
    activeSlide,
    slides,
    controllerIconActiveStyle,
    controllerIconInactiveStyle,
    nextButton,
    nextButtonStyle,
    nextSlide,
    skipSlider,
    skipButton,
    skipButtonStyle,
    orientation,
    nextLabel,
    skipLabel,
    doneLabel,
    controllerIconActive,
    controllerIconInactive
  } = props;
  const controllerIcons = [];
  const nextDefaultLabel =
    activeSlide === slides - 1 ? doneLabel || "DONE" : "NEXT";
  const skipDefaultLabel = "SKIP";
  for (let i = 0; i < slides; i += 1) {
    if (activeSlide === i) {
      controllerIcons.push(
        controllerIconActive || (
          <div
            key={i}
            style={controllerIconActiveStyle}
            className="ris-bullet ris-bullet-active"
          />
        )
      );
    } else {
      controllerIcons.push(
        controllerIconInactive || (
          <div
            key={i}
            style={controllerIconInactiveStyle}
            className="ris-bullet ris-bullet-inactive"
          />
        )
      );
    }
  }
  const renderVerticalController = () => {
    return (
      <div className="ris-controller-container ris-controller-vertical">
        <div className="ris-slide-icons-container">{controllerIcons}</div>
        {nextButton && (
          <button
            type="button"
            className="ris-control-button ris-button-vertical"
            onClick={nextSlide}
            style={nextButtonStyle}
          >
            {nextLabel || nextDefaultLabel}
          </button>
        )}
        {skipButton && (
          <button
            type="button"
            className="ris-control-button ris-button-vertical"
            onClick={skipSlider}
            style={skipButtonStyle}
          >
            {skipLabel || skipDefaultLabel}
          </button>
        )}
      </div>
    );
  };
  const renderHorizontalController = () => {
    return (
      <div className="ris-controller-container ris-controller-horizontal">
        <div className="ris-slide-icons-container">{controllerIcons}</div>
        {skipButton && (
          <button
            type="button"
            className="ris-control-button ris-button-horizontal"
            onClick={skipSlider}
            style={skipButtonStyle}
          >
            {skipLabel || skipDefaultLabel}
          </button>
        )}
        {nextButton && (
          <button
            type="button"
            className="ris-control-button ris-button-horizontal"
            onClick={nextSlide}
            style={nextButtonStyle}
          >
            {nextLabel || nextDefaultLabel}
          </button>
        )}
      </div>
    );
  };

  return orientation === "vertical"
    ? renderVerticalController()
    : renderHorizontalController();
};

Controller.propTypes = {
  activeSlide: PropTypes.number,
  slides: PropTypes.number,
  nextButton: PropTypes.bool,
  nextSlide: PropTypes.func,
  skipButton: PropTypes.bool,
  skipSlider: PropTypes.func,
  skipButtonStyle: PropTypes.object,
  nextButtonStyle: PropTypes.object,
  orientation: PropTypes.string,
  controllerIconActiveStyle: PropTypes.object,
  controllerIconInactiveStyle: PropTypes.object,
  skilLabel: PropTypes.string,
  nextLabel: PropTypes.string,
  doneLabel: PropTypes.string,
  controllerIconActive: PropTypes.node,
  controllerIconInactive: PropTypes.node
};

export default Controller;
