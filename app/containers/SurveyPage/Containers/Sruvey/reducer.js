/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';
import survery from '../../fixture';

// The initial state of the App
const initialState = fromJS({
  ...survery,
  currentStep: 0,
});

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_STEP':
      return state.set('currentStep', action.step);
    default:
      return state;
  }
}

export default reducer;
