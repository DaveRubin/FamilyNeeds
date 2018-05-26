import React from 'react';
import PropTypes from 'prop-types';
import { NavButton, NavigationContainer } from './styles';


const SurveyNavigation = ({ allowPrev, allowNext, onNext, onPrev }) => (
  <NavigationContainer>
    <NavButton disabled={!allowPrev} enabled={allowPrev} onClick={onPrev}>prev</NavButton>
    <span></span>
    <NavButton disabled={!allowNext} enabled={allowNext} onClick={onNext}>next</NavButton>
  </NavigationContainer>
);


SurveyNavigation.propTypes = {
  allowPrev: PropTypes.bool,
  allowNext: PropTypes.bool,
  onNext: PropTypes.func,
  onPrev: PropTypes.func,
};

export default SurveyNavigation;
