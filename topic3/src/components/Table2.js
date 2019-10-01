import React, { Component } from 'react';

class Table2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //state is by default an object
      multiplications: [
        {
          id: 1,
          multiplicationOf5: '5x1=5'
        },
        {
          id: 2,
          multiplicationOf5: '5x2=10'
        },
        {
          id: 3,
          multiplicationOf5: '5x3=15'
        },
        {
          id: 4,
          multiplicationOf5: '5x4=20'
        },
        {
          id: 5,
          multiplicationOf5: '5x5=25'
        },
        {
          id: 6,
          multiplicationOf5: '5x6=30'
        },
        {
          id: 7,
          multiplicationOf5: '5x7=35'
        },
        {
          id: 8,
          multiplicationOf5: '5x8=40'
        },
        {
          id: 9,
          multiplicationOf5: '5x9=45'
        },
        {
          id: 10,
          multiplicationOf5: '5x10=50'
        }
      ]
    };
  }

  renderTableData() {
    return this.state.multiplications.map((multiplication, index) => {
      const { id, multiplicationOf5 } = multiplication;
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{multiplicationOf5}</td>
        </tr>
      );
    });
  }

  renderHeading() {
    let header = Object.keys(this.state.multiplications[0]);
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  }

  render() {
    return (
      <div>
        <h1 id='title'>React Table, Assignment 3</h1>
        <table id='multiplications'>
          <tbody>
            <tr>{this.renderHeading()}</tr>
            {this.renderTableData()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table2;
