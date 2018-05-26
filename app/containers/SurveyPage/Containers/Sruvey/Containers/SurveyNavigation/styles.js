import glamorous from 'glamorous';

const buttonWidth = 100;
const buttonHeight = 50;

export const NavButton = glamorous.button({
  size: 24,
  backgroundColor: 'lightgrey',
  borderColor: 'grey',
  borderWidth: '1px',
  borderStyle: 'solid',
  color: 'black',
  borderRadius: 5,
},
({ enabled = false }) => ({
  opacity: enabled ? 1 : 0.5,
})
);

export const NavigationContainer = glamorous.div({
  display: 'grid',
  gridTemplateColumns: `${buttonWidth}px auto ${buttonWidth}px`,
  gridTemplateRows: `${buttonHeight}px`,
});
