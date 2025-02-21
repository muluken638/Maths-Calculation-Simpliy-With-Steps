import React, { useState } from 'react';

const BaseEncoder = () => {
  const [inputText, setInputText] = useState('');
  const [encoded, setEncoded] = useState('');
  const [decoded, setDecoded] = useState('');

  const handleEncode = () => setEncoded(btoa(inputText));
  const handleDecode = () => setDecoded(atob(encoded));

  return (
    <div className="p-4 bg-gray-900 text-white rounded-md">
      <h2 className="text-xl font-bold mb-4">Base64 Encoding</h2>
      <input
        type="text"
        className="w-full p-2 bg-gray-800 rounded"
        placeholder="Enter text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={handleEncode} className="bg-blue-500 px-4 py-2 rounded mt-2">
        Encode
      </button>
      <button onClick={handleDecode} className="bg-green-500 px-4 py-2 rounded mt-2 ml-2">
        Decode
      </button>
      <p className="mt-2"><strong>Encoded:</strong> {encoded}</p>
      <p className="mt-2"><strong>Decoded:</strong> {decoded}</p>
    </div>
  );
};

export default BaseEncoder;
