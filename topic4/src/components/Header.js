import React from 'react';

export default function Header({ headings }) {
  return (
    <thead>
      <tr>
        {headings.map(key => (
          <th key={key}>{key.toUpperCase()}</th>
        ))}
      </tr>
    </thead>
  );
}
