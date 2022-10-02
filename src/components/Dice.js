import React, { Component } from 'react';
import Die from './Die';
import '../styling/Dice.css';

class Dice extends Component {
  render() {
    const { dice, locked, disabled, isRolling, handleClick } = this.props;
    return (
      <div className='Dice'>
        {dice.map((d, idx) => (
          <Die
            key={idx}
            idx={idx}
            val={d}
            locked={locked[idx]}
            disabled={disabled}
            isRolling={isRolling && !locked[idx]}
            handleClick={handleClick}
          />
        ))}
      </div>
    );
  }
}

export default Dice;
