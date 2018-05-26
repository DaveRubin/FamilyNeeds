export const Types = {
  ANSWER_SELECTED: 'ANSWER_SELECTED',
};

export function answerSelected(questionId, selectedAnswer) {
  return {
    type: Types.ANSWER_SELECTED,
    questionId,
    selectedAnswer,
  };
}

