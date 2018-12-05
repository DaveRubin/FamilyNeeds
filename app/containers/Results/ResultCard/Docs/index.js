import bottles from './bottles';
import breastfeeding from './breastfeeding';
import immunisation from './immunisation';
import index from './index';
import kindergarten from './kindergarten';
import kupatCholim from './kupatCholim';
import pumping from './pumping';
import sleeping from './sleeping';
import timeforyourself from './timeforyourself';


export const TYPES = {
  bottles: 'bottles',
  breastfeeding: 'breastfeeding',
  immunisation: 'immunisation',
  index: 'index',
  kindergarten: 'kindergarten',
  kupatCholim: 'kupatCholim',
  pumping: 'pumping',
  sleeping: 'sleeping',
  timeforyourself: 'timeforyourself',
};

export const getComponent = (type) => {
  switch (type) {
    case TYPES.bottles: return bottles;
    case TYPES.breastfeeding: return breastfeeding;
    case TYPES.immunisation: return immunisation;
    case TYPES.index: return index;
    case TYPES.kindergarten: return kindergarten;
    case TYPES.kupatCholim: return kupatCholim;
    case TYPES.pumping: return pumping;
    case TYPES.sleeping: return sleeping;
    case TYPES.timeforyourself: return timeforyourself;
    default: return null;
  }
};
