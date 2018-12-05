import { fromJS } from 'immutable';
import { Types } from './actions';
import results from './__fixtures__/';
// The initial state of the App
const initialState = fromJS({
  answers: results,
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
