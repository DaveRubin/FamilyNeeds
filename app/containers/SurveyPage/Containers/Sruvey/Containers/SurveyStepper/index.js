import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
  root: {
    width: '90%',
  },
  button: {
    marginRight: theme.spacing.unit,
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
});

class HorizontalLinearStepper extends React.Component {

  state = {
    activeStep: 0,
  };

  handleNext = () => {
    const { activeStep } = this.state;
    this.setState({
      activeStep: activeStep + 1,
    });
  };

  handleBack = () => {
    const { activeStep } = this.state;
    this.setState({
      activeStep: activeStep - 1,
    });
  };

  renderStepper = () => {
    const { steps, activeStep } = this.props;
    return (
      <Stepper activeStep={activeStep}>
        {steps.map((label) => {
          const props = {};
          const labelProps = {};
          return (
            <Step key={label} {...props}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>);
  }

  renderNavigationButtons = () => {
    const { classes, steps, onNext, onPrev, activeStep, allowNext } = this.props;
    const isLastStep = activeStep === steps.length - 1;
    return (
      <div>
        <div>
          <Typography className={classes.instructions}>{steps[activeStep]}</Typography>
          <div>
            {activeStep}
            <Button
              disabled={activeStep === 0}
              onClick={onPrev}
              className={classes.button}
            >
            Back
          </Button>
            <Button
              variant="raised"
              color="primary"
              onClick={onNext}
              disabled={!allowNext}
              className={classes.button}
            >
              {isLastStep ? 'Finish' : 'Next'}
            </Button>
          </div>
        </div>
      </div>);
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        {this.renderStepper()}
        {this.renderNavigationButtons()}
      </div>
    );
  }
}

HorizontalLinearStepper.propTypes = {
  classes: PropTypes.object,
  steps: PropTypes.array,
  activeStep: PropTypes.number,
  allowNext: PropTypes.bool,
  onNext: PropTypes.func,
  onPrev: PropTypes.func,
};

export default withStyles(styles)(HorizontalLinearStepper);
