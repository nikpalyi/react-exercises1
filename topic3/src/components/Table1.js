import React, { Component } from 'react';

class Table1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //state is by default an object
      employees: [
        {
          employeeId: 1,
          employeeName: 'Wasif',
          employeeEmail: 'wasif@email.com'
        },
        { employeeId: 2, employeeName: 'Ali', employeeEmail: 'ali@email.com' },
        {
          employeeId: 3,
          employeeName: 'Saad',
          employeeEmail: 'saad@email.com'
        },
        {
          employeeId: 4,
          employeeName: 'Asad',
          employeeEmail: 'asad@email.com'
        },
        { employeeId: 5, employeeName: 'Asad', employeeEmail: 'asad@email.com' }
      ]
    };
  }

  renderTableData() {
    return this.state.employees.map((employee, index) => {
      const { employeeId, employeeName, employeeEmail } = employee; //destructuring
      return (
        <tr key={employeeId}>
          <td>{employeeId}</td>
          <td>{employeeName}</td>
          <td>{employeeEmail}</td>
        </tr>
      );
    });
  }

  renderHeading() {
    let header = Object.keys(this.state.employees[0]);
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  }

  render() {
    return (
      <div>
        <h1 id='title'>React Table, Assignment 1-2</h1>
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

export default Table1;
