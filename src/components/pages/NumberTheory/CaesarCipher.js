import React, { useState } from 'react';

const CaesarCipher = () => {
  const [text, setText] = useState('');
  const [shift, setShift] = useState(3);
  const [encoded, setEncoded] = useState('');
  const [decoded, setDecoded] = useState('');

  const caesarShift = (str, amount) => {
    return str.replace(/[a-zA-Z]/g, (char) => {
      const base = char >= 'a' ? 97 : 65;
      return String.fromCharCode(((char.charCodeAt(0) - base + amount) % 26) + base);
    });
  };

  const handleEncode = () => setEncoded(caesarShift(text, shift));
  const handleDecode = () => setDecoded(caesarShift(encoded, -shift));

  return (
    <div className="p-4 bg-gray-900 text-white rounded-md">
      <h2 className="text-xl font-bold mb-4">Caesar Cipher</h2>
      <input
        type="text"
        className="w-full p-2 bg-gray-800 rounded"
        placeholder="Enter text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="number"
        className="w-full mt-2 p-2 bg-gray-800 rounded"
        placeholder="Shift"
        value={shift}
        onChange={(e) => setShift(Number(e.target.value))}
      />
      <button onClick={handleEncode} className="bg-blue-500 px-4 py-2 rounded mt-2">
        Encrypt
      </button>
      <button onClick={handleDecode} className="bg-green-500 px-4 py-2 rounded mt-2 ml-2">
        Decrypt
      </button>
      <p className="mt-2"><strong>Encoded:</strong> {encoded}</p>
      <p className="mt-2"><strong>Decoded:</strong> {decoded}</p>
    </div>
  );
};

export default CaesarCipher;
