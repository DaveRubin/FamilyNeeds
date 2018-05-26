import glamorous from 'glamorous';

export const AnswerContainer = glamorous.div(
  { cursor: 'pointer' },
    ({ selected = false }) => (selected ? {
      color: 'white',
      backgroundColor: 'red',
      ':hover': {
        backgroundColor: 'darkred',
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
