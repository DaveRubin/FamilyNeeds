import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const SurveyText = ({ title, text }) => (
  <Paper style={{ padding: '15px' }}>
    <Typography variant="title" gutterBottom>{title}</Typography>
    <Typography variant="body2" >{text}</Typography>
  </Paper>);

SurveyText.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};

export default SurveyText;
