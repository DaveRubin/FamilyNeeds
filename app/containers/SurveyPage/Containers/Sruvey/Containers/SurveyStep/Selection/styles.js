import glamorous from 'glamorous';

export const SelectionContainer = glamorous.div({ display: 'grid', marginBottom: 20 });
export const Text = glamorous.p({
  margin: 0,
  marginBottom: 5,
  textAlign: 'center',
});
export const AnswersContainer = glamorous.div({
  display: 'grid',
  gridTemplateColumns: '50% 50%',
});
export const Answer = glamorous.div({
  minHeight: 100,
  display: 'flex',
  alignContent: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer' },
  ({ selected = false }) => (selected ? {
    backgroundColor: 'lightGrey',
    ':hover': {
      backgroundColor: 'grey',
    } }
    :
  {
    color: 'black',
    ':hover': {
      backgroundColor: 'lightgrey',
    },
  }
  )
);
export const AnswerText = glamorous.span();
