import React from 'react';

export default function Details({ students }) {
  console.log(students);
  return (
    <tbody>
      {students.map(student => (
        <tr key={student.studentId}>
          <td>{student.studentId}</td>
          <td>{student.studentName}</td>
          <td>{student.studentMarks}</td>
        </tr>
      ))}
    </tbody>
  );
}
