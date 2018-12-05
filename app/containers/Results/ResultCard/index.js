import React from 'react';
import PropTypes from 'prop-types';
import Truncate from 'react-truncate';
import { getComponent } from './Docs';
import { Card, Backdrop, InnerCard, CardHeader,
    CardBody,
    ShowMore } from './styles';


class ResultCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  toggleOpen = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  }

  blockEvent = (event) => {
    event.stopPropagation();
  }

  render() {
    const { resultType, isOpen, toggleOpen } = this.props;
    const InnerResult = getComponent(resultType);
    return (
    //   <Card isOpen={isOpen}>
      <Card >
        <CardHeader>{InnerResult.title}</CardHeader>
        <CardBody>
          <Truncate
            lines={1}
            ellipsis={(
              <span>...
                <ShowMore href="#" onClick={toggleOpen}>
                     עוד
                </ShowMore>
              </span>)}
          >
            {InnerResult.paragraphs[0]}
          </Truncate>

        </CardBody>
        {isOpen &&
        <Backdrop onClick={toggleOpen} >
          <InnerCard onClick={this.blockEvent}>
            {
                InnerResult.paragraphs.map((pr, index) => <div key={index}>{pr}</div>)// eslint-disable-line
            }
          </InnerCard>
        </Backdrop>
        }
      </Card>);
  }
}


ResultCard.propTypes = {
  resultType: PropTypes.string,
  isOpen: PropTypes.bool,
  toggleOpen: PropTypes.func,
};

export default ResultCard;
