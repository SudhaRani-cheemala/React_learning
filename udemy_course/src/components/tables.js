import { useEffect } from "react";
import React from 'react';

function MultiplicationTable() {
  const renderTable = () => {
    const number = 3;
    const table = [];

    for (let i = 1; i <= 6; i++) {
      const result = number * i;
      table.push(`${number} x ${i} = ${result}`);
    }

    return table;
  };

  const table = renderTable();

  useEffect(() => {
    table.forEach(entry => console.log(entry));
  }, [table]);

  return (
    <div>
      <h2>Multiplication Table of 2</h2>
      {table.map((entry, index) => (
        <p key={index}>{entry}</p>
      ))}
    </div>
  );
}

export default MultiplicationTable;
