import styled from 'glamorous';


export const Wrapper = styled.div({
  direction: 'rtl',
});

export const TypesWrapper = styled.div({
  display: 'grid',
  margin: '10px 0',
  gridTemplateColumns: 'repeat(2,1fr)',
  gridGap: 10,
});

const TypeCard = styled.div({
  borderRadius: 10,
  color: 'white',
  textAlign: 'center',
  transition: 'opacity 0.2s',
  cursor: 'pointer',
  '&:hover': {
    opacity: 1,
  } }, ({ selected }) => ({
    opacity: selected ? 1 : 0.4,
  })
);

export const CardHealth = styled(TypeCard)({ backgroundColor: '#FDB831' });
export const CardPlanning = styled(TypeCard)({ backgroundColor: '#45C2C9' });
export const CardCaring = styled(TypeCard)({ backgroundColor: '#A5C881' });
export const CardSupport = styled(TypeCard)({ backgroundColor: '#474056' });
export const IconWrapper = styled(TypeCard)({
  fontSize: '100px',
  position: 'relative',
  top: -60,
  height: 100,
  opacity: 1,
});

export const CardWrapper = styled.div({
  display: 'grid',
  gridTemplateColumns: 'repeat(2,1fr)',
  direction: 'rtl',
  gridAutoRows: 'auto',
  gridGap: 10,
});
