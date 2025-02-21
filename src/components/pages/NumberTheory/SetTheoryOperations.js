import React, { useState } from 'react';

const SetTheoryOperations = () => {
  const [set1, setSet1] = useState('');
  const [set2, setSet2] = useState('');
  const [setResult, setSetResult] = useState('');

  const performSetOperation = (op) => {
    const s1 = new Set(set1.split(',').map((el) => el.trim()));
    const s2 = new Set(set2.split(',').map((el) => el.trim()));

    let result = '';
    switch (op) {
      case 'union':
        result = [...new Set([...s1, ...s2])].join(', ');
        break;
      case 'intersection':
        result = [...s1].filter((el) => s2.has(el)).join(', ');
        break;
      case 'difference':
        result = [...s1].filter((el) => !s2.has(el)).join(', ');
        break;
      default:
        break;
    }
    setSetResult(result);
  };

  return (
    <div className="mb-6">
      <h2 className="text-xl">Set Theory Operations</h2>
      <input
        type="text"
        value={set1}
        onChange={(e) => setSet1(e.target.value)}
        placeholder="Enter first set (e.g., 1, 2, 3)"
        className="border p-2"
      />
      <input
        type="text"
        value={set2}
        onChange={(e) => setSet2(e.target.value)}
        placeholder="Enter second set (e.g., 3, 4, 5)"
        className="border p-2 ml-2"
      />
      <div className="mt-2">
        <button onClick={() => performSetOperation('union')} className="px-4 py-2 bg-blue-500 text-white">
          Union
        </button>
        <button onClick={() => performSetOperation('intersection')} className="px-4 py-2 bg-green-500 text-white ml-2">
          Intersection
        </button>
        <button onClick={() => performSetOperation('difference')} className="px-4 py-2 bg-red-500 text-white ml-2">
          Difference
        </button>
      </div>
      <p className="mt-2">Result: {setResult}</p>
    </div>
  );
};

export default SetTheoryOperations;
