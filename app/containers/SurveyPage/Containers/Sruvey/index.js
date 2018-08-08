import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { changeStep, submitData } from '../../actions';
import SurveyStep from './Containers/SurveyStep';
import SurveyStepper from './Containers/SurveyStepper';

class Survey extends React.Component {
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
    const { currentStep, steps, answers } = this.props;
    const nextStep = currentStep + 1;
    if (nextStep < steps.length) {
      this.props.onStepChange(nextStep);
    } else {
      this.props.submitData(answers);
    }
  }

  prevStep() {
    const nextSetp = Math.max(0, this.props.currentStep - 1);
    this.props.onStepChange(nextSetp);
  }

  isCurrentStepIsDone() {
    const { questions } = this.getCurrentStep();
    const answers = this.props.answers;
    return questions.every((question) => question.type === 'text' ||
      answers[question.id] !== undefined);
  }


  renderStepper = () => {
    const { currentStep, steps } = this.props;
    const stepsDescription = steps.map((step) => step.description);
    const allowNext = this.isCurrentStepIsDone();
    return (<SurveyStepper
      steps={stepsDescription}
      allowNext={allowNext}
      onNext={this.nextStep}
      onPrev={this.prevStep}
      activeStep={currentStep}
    />);
  }

  render() {
    return (
      <div>
        <SurveyStep step={this.getCurrentStep()} />
        {this.renderStepper()}
      </div>
    );
  }
}


Survey.propTypes = {
  steps: PropTypes.array,
  currentStep: PropTypes.number,
  answers: PropTypes.object,
  onStepChange: PropTypes.func,
  submitData: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onStepChange: (step) => dispatch(changeStep(step)),
    submitData: (step) => dispatch(submitData(step)),
  };
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

const withConnect = connect(mapStateToProps, mapDispatchToProps);


export default compose(
  withConnect,
)(Survey);
