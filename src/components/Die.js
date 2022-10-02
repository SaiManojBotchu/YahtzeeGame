import React, { Component } from 'react';
import '../styling/Die.css';

class Die extends Component {
  constructor(props) {
    super(props);
    this.handleDieClick = this.handleDieClick.bind(this);
  }

  handleDieClick() {
    this.props.handleClick(this.props.idx);
  }

  // FIXME: 2)call hadleClick with parameters
  render() {
    return (
      <button
        className='Die'
        style={{ backgroundColor: this.props.locked ? 'grey' : 'black' }}
        onClick={this.handleDieClick}>
        {this.props.val}
      </button>
    );
  }
}

export default Die;
