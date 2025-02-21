import React, { useState } from 'react';
import CryptoJS from 'crypto-js';

const Hasher = () => {
  const [text, setText] = useState('');
  const [md5Hash, setMd5Hash] = useState('');
  const [sha256Hash, setSha256Hash] = useState('');

  const handleHash = () => {
    setMd5Hash(CryptoJS.MD5(text).toString());
    setSha256Hash(CryptoJS.SHA256(text).toString());
  };

  return (
    <div className="p-4 bg-gray-900 text-white rounded-md">
      <h2 className="text-xl font-bold mb-4">MD5 & SHA-256 Hashing</h2>
      <input
        type="text"
        className="w-full p-2 bg-gray-800 rounded"
        placeholder="Enter text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleHash} className="bg-blue-500 px-4 py-2 rounded mt-2">
        Generate Hash
      </button>
      {md5Hash && (
        <p className="mt-2"><strong>MD5:</strong> {md5Hash}</p>
      )}
      {sha256Hash && (
        <p className="mt-2"><strong>SHA-256:</strong> {sha256Hash}</p>
      )}
    </div>
  );
};

export default Hasher;
