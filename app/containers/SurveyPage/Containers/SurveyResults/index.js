import React from 'react';
import PropTypes from 'prop-types';


const SurveyResults = ({ results }) => (
  <div>
      RESULTS
      {JSON.stringify(results)}
  </div>
);


SurveyResults.propTypes = {
  results: PropTypes.object,
};

export default SurveyResults;
