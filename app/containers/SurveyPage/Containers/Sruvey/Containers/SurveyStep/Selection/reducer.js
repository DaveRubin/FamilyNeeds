import { fromJS } from 'immutable';
import { Types } from './actions';

// The initial state of the App
const initialState = fromJS({
  answers: {},
});

function setStepReducer(state = initialState, action) {
  switch (action.type) {
    case Types.ANSWER_SELECTED:
      return state.setIn(['answers', action.questionId], action.selectedAnswer);
    default:
      return state;
  }
}

export default setStepReducer;
