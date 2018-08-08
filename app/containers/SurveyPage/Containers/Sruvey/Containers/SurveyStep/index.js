import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { SurveyPageContainer, QuestionsContainer } from './styles';
import Selection from './Selection';
import SurveyText from './SurveyText';
import SurveyBinary from './SurveyBinary';

class SurveyStep extends React.Component {

  renderQuestions() {
    const { questions } = this.props.step;
    return (
      questions.map((question) => {
        switch (question.type) {
          case 'selection' : return (
            <Selection
              key={question.id}
              {...question}
            />);
          case 'text': return (
            <SurveyText
              key={question.text}
              {...question}
            />);
          case 'binary': return (
            <SurveyBinary
              key={question.text}
              {...question}
            />);
          default: return null;
        }
      }
    )
    );
  }

  render() {
    const { description } = this.props.step;

    return (
      <SurveyPageContainer>
        <Typography variant="display2" gutterBottom >
          {description}
        </Typography>
        <QuestionsContainer>
          {this.renderQuestions()}
        </QuestionsContainer>
      </SurveyPageContainer>
    );
  }
}

SurveyStep.propTypes = {
  step: PropTypes.object,
};

export default SurveyStep;
