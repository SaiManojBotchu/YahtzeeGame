import React, { Component } from 'react';
import '../styling/Die.css';

class Die extends Component {
  // FIXME: 2)call hadleClick with parameters
  render() {
    return (
      <button
        className='Die'
        style={{ backgroundColor: this.props.locked ? 'grey' : 'black' }}
        onClick={this.props.handleClick}>
        {this.props.val}
      </button>
    );
  }
}

export default Die;
