import React, { Component } from 'react';
import '../styling/RuleRow.css';

class RuleRow extends Component {
  render() {
    const { name, score, desc, doScore } = this.props;
    const disabled = score !== undefined;
    return (
      <tr
        className={`RuleRow RuleRow-${disabled ? 'disabled' : 'active'}`}
        onClick={disabled ? null : doScore}>
        <td className='RuleRow-name'>{name}</td>
        <td className='RuleRow-score'>{disabled ? score : desc}</td>
      </tr>
    );
  }
}

export default RuleRow;
