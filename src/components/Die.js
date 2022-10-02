import React, { Component } from 'react';
import '../styling/Die.css';

const dieNames = ['', 'one', 'two', 'three', 'four', 'five', 'six'];

class Die extends Component {
  constructor(props) {
    super(props);
    this.handleDieClick = this.handleDieClick.bind(this);
  }

  handleDieClick() {
    this.props.handleClick(this.props.idx);
  }

  render() {
    const { val, locked, disabled } = this.props;
    let classes = `Die fas fa-dice-${dieNames[val]} fa-4x `;
    if (locked) classes += 'Die-locked';

    return <i className={classes} onClick={this.handleDieClick} disabled={disabled} />;
  }
}

export default Die;
