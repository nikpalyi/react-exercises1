import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Details from './Details';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [
        { studentId: 1, studentName: 'Bob Dylan', studentMarks: 3 },
        { studentId: 2, studentName: 'Jim Morrison', agstudentMarkse: 4 },
        { studentId: 3, studentName: 'John Lennon', studentMarks: 5 },
        { studentId: 4, studentName: 'Jimmy Hendrix', studentMarks: 5 },
        { studentId: 5, studentName: 'Jimmy Page', studentMarks: 4 }
      ]
    };
  }

  render() {
    return (
      <div>
        <h1>React Assignment Topic 4</h1>

        <table id='students'>
          <Header headings={Object.keys(this.state.students[0])} />
          <Details students={this.state.students} />
        </table>
      </div>
    );
  }
}

Main.propTypes = {
  students: PropTypes.array
};

export default Main;
