import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';
import { changeStep } from './actions';
import reducer from './reducer';
import SurveyStep from './Containers/SurveyStep';
import SurveyNavigation from './Containers/SurveyNavigation';

class SurveyPage extends React.Component {
  constructor(props) {
    super(props);

    this.nextStep = this.nextStep.bind(this);
    this.prevStep = this.prevStep.bind(this);
    this.getCurrentStep = this.getCurrentStep.bind(this);
  }

  getCurrentStep() {
    return this.props.steps[this.props.currentStep];
  }

  nextStep() {
    console.log('NEXT');
    const nextSetp = Math.min(this.props.steps.length - 1, this.props.currentStep + 1);
    this.props.onStepChange(nextSetp);
  }

  prevStep() {
    const nextSetp = Math.max(0, this.props.currentStep - 1);
    this.props.onStepChange(nextSetp);
  }

  isCurrentStepIsDone() {
    const questions = this.getCurrentStep().questions;
    const answers = this.props.answers;
    let areAllAnswered = true;
    console.log(answers);
    questions.forEach((question) => {
      if (answers[question.id] === undefined) areAllAnswered = false;
    });
    return areAllAnswered;
  }

  renderNavigation() {
    const { currentStep, steps } = this.props;
    const allowPrev = currentStep > 0;
    const isLastStep = steps.length - 1 === currentStep;
    const allowNext = !isLastStep && this.isCurrentStepIsDone();
    return (<SurveyNavigation
      allowPrev={allowPrev}
      allowNext={allowNext}
      onNext={this.nextStep}
      onPrev={this.prevStep}
    />);
  }

  render() {
    return (
      <div>
        <SurveyStep step={this.getCurrentStep()} />
        {this.renderNavigation()}
      </div>
    );
  }
}


SurveyPage.propTypes = {
  steps: PropTypes.array,
  currentStep: PropTypes.number,
  answers: PropTypes.object,
  onStepChange: PropTypes.func,
};


export function mapDispatchToProps(dispatch) {
  return {
    onStepChange: (step) => dispatch(changeStep(step)),
  };
}

const mapStateToProps = (state) => {
  const surveyStep = state.get('survey');
  const answers = state.getIn(['surveyAnswers', 'answers']) ? state.getIn(['surveyAnswers', 'answers']).toJS()
  : {};
  return {
    steps: surveyStep.get('steps').toJS(),
    currentStep: surveyStep.get('currentStep'),
    answers,
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'survey', reducer });
// const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  // withSaga,
  withConnect,
)(SurveyPage);

