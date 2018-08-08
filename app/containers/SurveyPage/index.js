/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Helmet } from 'react-helmet';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import Survey from './Containers/Sruvey';
import Results from './Containers/SurveyResults';
import reducer from './reducer';
import saga from './saga';


class SurveyPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Survey Page</title>
          <meta name="survey" content="needs mapping survey" />
        </Helmet>
        <Survey {...this.props} />

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const surveyStep = state.get('survey');
  const answers = state.getIn(['surveyAnswers', 'answers']) ? state.getIn(['surveyAnswers', 'answers']).toJS()
  : {};
  return {
    steps: surveyStep.get('steps').toJS(),
    currentStep: surveyStep.get('currentStep'),
    sendingData: surveyStep.get('sendingData'),
    results: surveyStep.get('results'),
    answers,
  };
};

const withConnect = connect(mapStateToProps);

const withReducer = injectReducer({ key: 'survey', reducer });
const withSaga = injectSaga({ key: 'survey', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(SurveyPage);
