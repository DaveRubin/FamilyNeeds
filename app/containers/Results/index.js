import React from 'react';
import { results } from './__fixtures__';
import ResultCard from './ResultCard';
import { CardWrapper } from './styles';

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      openIndex: null,
    };
  }

  toggleOpen = (index) => () => {
    const { isOpen, openIndex } = this.state;
    if (openIndex !== index) {
      this.setState({ isOpen: true, openIndex: index });
    } else {
      this.setState({ isOpen: !isOpen });
    }
  }

  render() {
    const { isOpen, openIndex } = this.state;
    return (<div>
      <CardWrapper>
        {results.map((result, index) => (<ResultCard
          isOpen={index === openIndex && isOpen}
          toggleOpen={this.toggleOpen(index)}
          resultType={result}
        />))}
      </CardWrapper>
    </div>);
  }
}

export default Results;
