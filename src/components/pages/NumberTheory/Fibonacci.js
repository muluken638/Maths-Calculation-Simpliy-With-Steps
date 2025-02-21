import React, { useState } from 'react';

const Fibonacci = () => {
  const [num, setNum] = useState('');
  const [result, setResult] = useState('');
  const [steps, setSteps] = useState([]);

  // Function to calculate Fibonacci and show detailed steps
  const calculateFibonacci = () => {
    let fib = [0, 1];
    let stepDetails = ['Step 1: Start with 0 and 1 as the first two numbers in the Fibonacci sequence.'];

    for (let i = 2; i < num; i++) {
      const nextFib = fib[i - 1] + fib[i - 2];
      fib.push(nextFib);
      stepDetails.push(`Step ${i + 1}: Add ${fib[i - 1]} + ${fib[i - 2]} = ${nextFib}`);
    }

    setSteps(stepDetails);
    setResult(fib);
  };

  return (
    <div className="bg-red-600 p-6 rounded shadow-md min-h-full">
      <h3 className="text-2xl font-semibold">Fibonacci Series</h3>
      <div className="mt-4 flex flex-col sm:flex-row gap-3 sm:gap-5 items-center py-4 px-6">
        <input
          type="number"
          value={num}
          onChange={(e) => setNum(e.target.value)}
          className="border rounded px-4 py-3 h-12 text-lg w-full sm:w-64"
          placeholder="Enter a number"
        />
        <button
          onClick={calculateFibonacci}
          className="bg-blue-600 text-white rounded px-4 py-3 h-12 text-lg w-full sm:w-64"
        >
          Calculate Factorial
        </button>
      </div>

      
      <div className="mt-4">
        {result && <p className="text-lg font-semibold">Result: {result.join(', ')}</p>}
      </div>
      {steps.length > 0 && (
        <div className="mt-4">
          <h4 className="font-semibold">Steps to Calculate Fibonacci Series:</h4>
          <ul className="list-decimal pl-5">
            {steps.map((step, index) => (
              <li key={index} className="text-lg">{step}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Fibonacci;
