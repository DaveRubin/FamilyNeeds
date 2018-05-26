import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';
import { changeStep } from './actions';
import reducer from './reducer';
import { Button } from './styles';
import SurveyStep from './Containers/SurveyStep';


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
    const nextSetp = Math.min(this.props.steps.length - 1, this.props.currentStep + 1);
    this.props.onStepChange(nextSetp);
  }

  prevStep() {
    const nextSetp = Math.max(0, this.props.currentStep - 1);
    this.props.onStepChange(nextSetp);
  }


  render() {
    return (
      <div>
        <SurveyStep step={this.getCurrentStep()} />
        <Button onClick={this.prevStep}>prev</Button>
        <Button onClick={this.nextStep}>next</Button>
      </div>
    );
  }
}


SurveyPage.propTypes = {
  steps: PropTypes.array,
  currentStep: PropTypes.number,
  onStepChange: PropTypes.func,
};


export function mapDispatchToProps(dispatch) {
  return {
    onStepChange: (step) => dispatch(changeStep(step)),
  };
}

const mapStateToProps = (state) => {
  const surveyState = state.get('survey');
  return {
    steps: surveyState.get('steps').toJS(),
    currentStep: surveyState.get('currentStep'),
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

