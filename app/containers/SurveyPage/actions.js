export const Types = {
  CHANGE_STEP: 'CHANGE_STEP',
  SUBMIT_DATA: 'SUBMIT_DATA',
  GOT_RESULTS: 'GOT_RESULTS',
};

export function changeStep(step) {
  return {
    type: Types.CHANGE_STEP,
    step,
  };
}

export function submitData(answers) {
  return {
    type: Types.SUBMIT_DATA,
    answers,
  };
}

export function gotResults(results) {
  return {
    type: Types.GOT_RESULTS,
    results,
  };
}
