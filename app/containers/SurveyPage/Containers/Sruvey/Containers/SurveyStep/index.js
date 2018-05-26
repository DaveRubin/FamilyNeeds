import React from 'react';
import PropTypes from 'prop-types';
import { SurveyPageContainer, SurveyPageDescription, QuestionsContainer } from './styles';
import Question from './Question';

class SurveyStep extends React.Component {

  renderQuestions() {
    const { questions } = this.props.step;
    return (
      questions.map((question) =>
        (<Question
          key={question.id}
          id={question.id}
          text={question.text}
          answers={question.answers}
        />)
    )
    );
  }

  render() {
    const { description } = this.props.step;
    return (
      <SurveyPageContainer>
        <SurveyPageDescription>
          {description}
        </SurveyPageDescription>
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
