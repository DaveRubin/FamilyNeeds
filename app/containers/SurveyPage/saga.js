import { delay } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';
import { gotResults } from './actions';


export function* submitData() {
    // Call our request helper (see 'utils/request')
  yield call(delay, 1000);
  yield put(gotResults({ someValue: 'ssss' }));
}

export default function* surveySaga() {
  yield takeLatest('SUBMIT_DATA', submitData);
}
