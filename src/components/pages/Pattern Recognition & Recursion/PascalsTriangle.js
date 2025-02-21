import React, { useState } from "react";

const PascalsTriangle = () => {
  const [rows, setRows] = useState(5);
  const [triangle, setTriangle] = useState([]);

  const generatePascalsTriangle = (numRows) => {
    let result = [];
    for (let i = 0; i < numRows; i++) {
      result[i] = [];
      for (let j = 0; j <= i; j++) {
        if (j === 0 || j === i) {
          result[i][j] = 1;
        } else {
          result[i][j] = result[i - 1][j - 1] + result[i - 1][j];
        }
      }
    }
    setTriangle(result);
  };

  return (
    <div>
      <h3>Pascal's Triangle</h3>
      <input type="number" value={rows} onChange={(e) => setRows(e.target.value)} />
      <button onClick={() => generatePascalsTriangle(rows)}>Generate</button>
      <pre>{triangle.map(row => row.join(' ')).join('\n')}</pre>
    </div>
  );
};

export default PascalsTriangle;