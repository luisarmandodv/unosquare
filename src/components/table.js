import React, { Component } from 'react';

class table extends Component {

  renderRows(){
    var test = [];
    for(let i = 0; i<this.props.data.length; i++){
      test.push(
        <tr key={i} >
          <td>{this.props.data[i].name}</td>
          <td>{this.props.data[i].ip}</td>
        </tr>
      )
      
    }
    return test;
  }

  render() {
    return (
      <div>
        <table>
        <thead>
          <tr>
            <th>Machine</th>
            <th>iP</th>
          </tr>
        </thead>
        <tbody>
          {this.renderRows()}
        </tbody>
        </table>
      </div>
    );
  }
}

export default table;
