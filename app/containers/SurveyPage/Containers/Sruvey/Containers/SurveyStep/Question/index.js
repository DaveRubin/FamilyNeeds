import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';
import { QuestionContainer, Text, AnswersContainer } from './styles';
import Answer from './Answer';
import { answerSelected } from './actions';
import reducer from './reducer';


class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: -1,
    };

    this.itemSelected = this.itemSelected.bind(this);
  }

  itemSelected(selected) {
    this.props.answerSelected(this.props.id, selected);
    this.setState({ selected });
  }

  renderAnswers(answers) {
    return (
      answers.map((answer, index) =>
        (<Answer
          key={answer}
          text={answer}
          selected={index === this.state.selected}
          index={index}
          onSelected={this.itemSelected}
        />))
    );
  }

  render() {
    const { text, answers } = this.props;
    return (
      <QuestionContainer>
        <Text>
          {text}
        </Text>
        <AnswersContainer>
          {this.renderAnswers(answers)}
        </AnswersContainer>
      </QuestionContainer>
    );
  }
}

Question.propTypes = {
  id: PropTypes.number,
  text: PropTypes.string,
  answers: PropTypes.arrayOf(PropTypes.string),
  answerSelected: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    answerSelected: (id, answer) => dispatch(answerSelected(id, answer)),
  };
}

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps;
  const selectedIndex = state.getIn(['survey', 'answers', id]);
  return { answerSelected: selectedIndex };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'survey', reducer });

export default compose(
    withReducer,
    withConnect,
  )(Question);
