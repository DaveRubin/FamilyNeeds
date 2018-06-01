export function changeStep(step) {
  return {
    type: 'CHANGE_STEP',
    step,
  };
}

export function submitData(answers) {
  return {
    type: 'SUBMIT_DATA',
    answers,
  };
}
