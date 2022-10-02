import React, { Component } from 'react';
import '../styling/RuleRow.css';

class RuleRow extends Component {
  // FIXME: call doScore with parameters
  render() {
    return (
      <tr className='RuleRow RuleRow-active' onClick={this.props.doScore}>
        <td className='RuleRow-name'>{this.props.name}</td>
        <td className='RuleRow-score'>{this.props.score}</td>
      </tr>
    );
  }
}

export default RuleRow;
