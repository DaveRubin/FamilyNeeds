import { fromJS } from 'immutable';
import survery from './fixture';
import { Types } from './actions';

// The initial state of the App
const initialState = fromJS({
  ...survery,
  currentStep: 0,
  sendingData: false,
  results: { someField: 'AAA' },
});

function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.CHANGE_STEP:
      return state.set('currentStep', action.step);
    case Types.SUBMIT_DATA:
      return state.set('sendingData', true);
    case Types.GOT_RESULTS:
      return state.set('sendingData', false).set('results', action.results);
    default:
      return state;
  }
}

export default reducer;
