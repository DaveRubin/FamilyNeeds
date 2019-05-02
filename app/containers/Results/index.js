import React from 'react';
import { IoMdBasketball } from 'react-icons/io/';
import { results } from './__fixtures__';
import ResultCard from './ResultCard';
import { CardWrapper, Wrapper,
  IconWrapper,
  TypesWrapper,
  CardHealth,
  CardPlanning,
  CardCaring,
  CardSupport } from './styles';


export const MetricType = {
  Health: 'Health',
  Planning: 'Planning',
  Caring: 'Caring',
  Support: 'Support',
};

const MainCards = [
  { type: MetricType.Health, CardComponent: CardHealth, Icon: IoMdBasketball, title: 'בריאות התינוק' },
  { type: MetricType.Planning, CardComponent: CardPlanning, Icon: IoMdBasketball, title: 'תכנון בריאות התינוק' },
  { type: MetricType.Caring, CardComponent: CardCaring, Icon: IoMdBasketball, title: 'הטיפול בילד' },
  { type: MetricType.Support, CardComponent: CardSupport, Icon: IoMdBasketball, title: 'תמיכה רגשית לאם' },
];

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      openIndex: null,
      typeSelected: null,
    };
  }

  // will be opened
  toggleOpen = (index) => () => {
    const { isOpen, openIndex } = this.state;
    if (openIndex !== index) {
      this.setState({ isOpen: true, openIndex: index });
    } else {
      this.setState({ isOpen: !isOpen });
    }
  }

  typeSelected = (type) => () => {
    const { typeSelected } = this.state;
    this.setState({ typeSelected: typeSelected === type ? null : type });
  }

  renderTypes = () => (
    <TypesWrapper>
      {MainCards.map(({ type, CardComponent, Icon, title }) =>
        (<CardComponent
          key={type}
          selected={this.state.typeSelected === type}
          onClick={this.typeSelected(type)}
        >
          <h1>
            {title}
          </h1>
          <IconWrapper><Icon /></IconWrapper>
        </CardComponent>)
        )}
    </TypesWrapper>)

  render() {
    const { isOpen, openIndex, typeSelected } = this.state;
    return (
      <Wrapper>
        <h1>
        מהשאלון עולה כי  יש צורך בבלה בלה בלה
      </h1>
        {this.renderTypes()}
        {typeSelected &&
        <CardWrapper>
          {results[typeSelected].map((result, index) => (<ResultCard
            isOpen={index === openIndex && isOpen}
            toggleOpen={this.toggleOpen(index)}
            resultType={result}
          />))}
        </CardWrapper>}
      </Wrapper>);
  }
}

export default Results;
