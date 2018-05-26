import React from 'react';
import PropTypes from 'prop-types';
import { AnswerContainer } from './styles';

class Answer extends React.Component {

  handleClick = () => {
    this.props.onSelected(this.props.index);
  }

  render() {
    return (
      <AnswerContainer onClick={this.handleClick} selected={this.props.selected}>
        {this.props.text}
      </AnswerContainer>
    );
  }
}

Answer.propTypes = {
  onSelected: PropTypes.func,
  text: PropTypes.string,
  selected: PropTypes.bool,
  index: PropTypes.number,
};

export default Answer;
