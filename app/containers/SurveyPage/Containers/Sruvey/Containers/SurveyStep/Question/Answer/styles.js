import glamorous from 'glamorous';

export const AnswerContainer = glamorous.div(
  { cursor: 'pointer' },
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
