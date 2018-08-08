import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

const SurveyBinary = ({ text }) => (
  <div>
    <Typography variant="body2" >{text}</Typography>
    <div>yes</div>
    <div>no</div>
  </div>);

SurveyBinary.propTypes = {
  text: PropTypes.string,
};

export default SurveyBinary;
