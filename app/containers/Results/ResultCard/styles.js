import styled from 'glamorous';

export const ShowMore = styled.a({ marginRight: 10 });

export const CardHeader = styled.div({
  backgroundColor: '#3f51b5',
  padding: 15,
  color: 'white',
});
export const CardBody = styled.div({
  backgroundColor: 'white',
  padding: 15,
});
export const Card = styled.div({
  // margin: '30px 0',
  boxShadow: '0px 5px 10px 0px rgba(0,0,0,0.1)',
}, ({ isOpen }) => isOpen && ({
  gridColumnStart: 1,
  gridColumnEnd: 3,
}));


export const Backdrop = styled.div({
  backgroundColor: 'rgba(0, 0, 0, 0.3);',
  position: 'fixed',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const InnerCard = styled.div({
  backgroundColor: 'white',
  padding: 30,
  width: 700,
  boxShadow: '0px 5px 10px 0px rgba(0,0,0,0.3)',
});
