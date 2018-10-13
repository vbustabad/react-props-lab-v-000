import React from 'react';
import ReactDOM from 'react-dom';

class Spaceship extends React.Component {
  render() {
    return (
      <div className="starWars-Spaceship">
        <p> name={this.props.name} </p>
        <p> speed={this.props.speed} </p>
        <p> hasRockets={this.props.hasRockets} </p>
<<<<<<< HEAD
        <p> colors={this.props.colors} </p>
=======
        <p> colors: {this.props.colors} </p>
>>>>>>> 6311d3609f9abca80ee9c044832c0c8f155b723e
      </div>
    );
  }
}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
};

ReactDOM.render(
  <Spaceship
    name="Millennium Falcon"
    speed={500}
    colors={['green', 'magenta']}
  />,
  document.getElementById('root')
);

export default Spaceship;
