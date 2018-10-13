import React from 'react';
import ReactDOM from 'react-dom';

class Spaceship extends React.Component {
  render() {
    return (
      <div className="starWars-Spaceship">
        <p> name={this.props.name} </p>
        <p> speed={this.props.speed} </p>
        <p> hasRockets={this.props.hasRockets ? true : false} </p>
        <p> colors={this.props.colors.join(', ')} </p>
      </div>
    );
  }
}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
};

export default Spaceship;
