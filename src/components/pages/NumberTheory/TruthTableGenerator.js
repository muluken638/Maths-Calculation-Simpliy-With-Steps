import React, { useState } from 'react';

const TruthTableGenerator = () => {
  const [inputFormula, setInputFormula] = useState('');
  const [truthTable, setTruthTable] = useState([]);

  const generateTruthTable = (formula) => {
    const variables = [...new Set(formula.replace(/[^\w\s]/g, '').split('').filter(Boolean))];
    const rows = Math.pow(2, variables.length);
    const table = [];

    for (let i = 0; i < rows; i++) {
      const row = {};
      const bin = i.toString(2).padStart(variables.length, '0');
      variables.forEach((varName, index) => {
        row[varName] = bin[index] === '1' ? 'T' : 'F';
      });
      table.push(row);
    }
    setTruthTable(table);
  };

  return (
    <div className="mb-6">
      <h2 className="text-xl">Truth Table Generator</h2>
      <input
        type="text"
        value={inputFormula}
        onChange={(e) => setInputFormula(e.target.value)}
        placeholder="Enter a logical formula (e.g., A & B)"
        className="border p-2 w-full"
      />
      <button onClick={() => generateTruthTable(inputFormula)} className="mt-2 px-4 py-2 bg-blue-500 text-white">
        Generate Truth Table
      </button>
      <table className="mt-4 w-full">
        <thead>
          <tr>
            {truthTable.length > 0 && Object.keys(truthTable[0]).map((header, idx) => (
              <th key={idx} className="border p-2">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {truthTable.map((row, idx) => (
            <tr key={idx}>
              {Object.values(row).map((cell, idx) => (
                <td key={idx} className="border p-2">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TruthTableGenerator;
