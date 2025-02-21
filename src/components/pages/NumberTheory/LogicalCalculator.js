import React, { useState } from 'react';

const LogicalCalculator = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [operationResult, setOperationResult] = useState('');

  const calculateLogicalOperation = (op) => {
    const num1 = parseInt(input1, 2);
    const num2 = parseInt(input2, 2);
    let result = '';
    switch (op) {
      case 'AND':
        result = (num1 & num2).toString(2);
        break;
      case 'OR':
        result = (num1 | num2).toString(2);
        break;
      case 'XOR':
        result = (num1 ^ num2).toString(2);
        break;
      default:
        break;
    }
    setOperationResult(result);
  };

  return (
    <div className="mb-6">
      <h2 className="text-xl">AND, OR, XOR Calculator</h2>
      <input
        type="text"
        value={input1}
        onChange={(e) => setInput1(e.target.value)}
        placeholder="Enter first binary number"
        className="border p-2"
      />
      <input
        type="text"
        value={input2}
        onChange={(e) => setInput2(e.target.value)}
        placeholder="Enter second binary number"
        className="border p-2 ml-2"
      />
      <div className="mt-2">
        <button onClick={() => calculateLogicalOperation('AND')} className="px-4 py-2 bg-red-500 text-white">
          AND
        </button>
        <button onClick={() => calculateLogicalOperation('OR')} className="px-4 py-2 bg-yellow-500 text-white ml-2">
          OR
        </button>
        <button onClick={() => calculateLogicalOperation('XOR')} className="px-4 py-2 bg-purple-500 text-white ml-2">
          XOR
        </button>
      </div>
      <p className="mt-2">Result: {operationResult}</p>
    </div>
  );
};

export default LogicalCalculator;
