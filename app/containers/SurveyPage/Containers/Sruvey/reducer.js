import { fromJS } from 'immutable';
import survery from '../../fixture';

// The initial state of the App
const initialState = fromJS({
  ...survery,
  currentStep: 0,
  sendingData: false,
});

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_STEP':
      return state.set('currentStep', action.step);
    case 'SUBMIT_DATA':
      return state.set('sendingData', true);
    default:
      return state;
  }
}

export default reducer;
