import React, { useState } from 'react';

const BinaryConverter = () => {
  const [binaryInput, setBinaryInput] = useState('');
  const [decimalOutput, setDecimalOutput] = useState(0);

  const convertBinaryToDecimal = (binary) => {
    if (/^[01]+$/.test(binary)) {
      setDecimalOutput(parseInt(binary, 2));
    } else {
      alert("Invalid binary input");
    }
  };

  return (
    <div className="mb-6">
      <h2 className="text-xl">Binary Converter</h2>
      <input
        type="text"
        value={binaryInput}
        onChange={(e) => setBinaryInput(e.target.value)}
        placeholder="Enter binary number"
        className="border p-2"
      />
      <button onClick={() => convertBinaryToDecimal(binaryInput)} className="mt-2 px-4 py-2 bg-green-500 text-white">
        Convert to Decimal
      </button>
      <p className="mt-2">Decimal Output: {decimalOutput}</p>
    </div>
  );
};

export default BinaryConverter;
