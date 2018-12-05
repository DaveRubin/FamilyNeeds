import styled from 'glamorous';

export const CardWrapper = styled.div({
  display: 'grid',
  gridTemplateColumns: 'repeat(2,1fr)',
  direction: 'rtl',
  gridAutoRows: 'auto',
  gridGap: 10,
});
