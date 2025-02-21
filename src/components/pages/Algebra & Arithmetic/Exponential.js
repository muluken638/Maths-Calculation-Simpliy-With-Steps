import React, { useState } from "react";

const Exponential = () => {
  const [base, setBase] = useState('');
  const [exponent, setExponent] = useState('');
  const [resultIterative, setResultIterative] = useState(null);
  const [resultRecursive, setResultRecursive] = useState(null);
  const [steps, setSteps] = useState([]);

  // Iterative Method
  const calculatePowerIterative = (base, exponent) => {
    let stepsList = [];
    let result = 1;
    let absExponent = Math.abs(exponent);

    stepsList.push(`Start with result = 1.`);
    for (let i = 1; i <= absExponent; i++) {
      result *= base;
      stepsList.push(`Step ${i}: Multiply by ${base}, result = ${result}`);
    }

    // Handling negative exponents
    if (exponent < 0) {
      result = 1 / result;
      stepsList.push(`Since exponent is negative, take reciprocal: 1/${result}`);
    }

    setSteps(stepsList);
    return result;
  };

  // Recursive Method
  const calculatePowerRecursive = (base, exponent) => {
    if (exponent === 0) return 1;
    if (exponent < 0) return 1 / calculatePowerRecursive(base, -exponent);
    return base * calculatePowerRecursive(base, exponent - 1);
  };

  const handleCalculate = () => {
    const baseNum = parseFloat(base);
    const expNum = parseInt(exponent);

    if (!isNaN(baseNum) && !isNaN(expNum)) {
      const iterativeResult = calculatePowerIterative(baseNum, expNum);
      const recursiveResult = calculatePowerRecursive(baseNum, expNum);
      setResultIterative(iterativeResult);
      setResultRecursive(recursiveResult);
    }
  };

  return (
    <div className="bg-red-600 p-6 rounded shadow-md min-h-full">
      <h3 className="text-2xl font-semibold">Exponentiation Calculator</h3>

      <div className="mt-4 flex flex-col sm:flex-row gap-3 sm:gap-5 items-center py-4 px-6">
        <input
          type="number"
          value={base}
          onChange={(e) => setBase(e.target.value)}
          className="border rounded px-4 py-3 h-12 text-lg w-full sm:w-64"
          placeholder="Enter base"
        />
        <input
          type="number"
          value={exponent}
          onChange={(e) => setExponent(e.target.value)}
          className="border rounded px-4 py-3 h-12 text-lg w-full sm:w-64"
          placeholder="Enter exponent"
        />
      <button
        onClick={handleCalculate}
        className="bg-blue-600 text-white rounded px-4 py-3 h-12 text-lg w-full sm:w-64"
        >
        Calculate Power
      </button>
      </div>


      {/* Iterative Result */}
      {resultIterative !== null && (
        <div className="mt-4">
          <h4 className="font-semibold">Iterative Method Steps:</h4>
          <ul className="list-decimal pl-5">
            {steps.map((step, index) => (
              <li key={index} className="text-lg">{step}</li>
            ))}
          </ul>
          <p className="text-lg font-semibold mt-2">Iterative Result: {resultIterative}</p>
        </div>
      )}

      {/* Recursive Result */}
      {resultRecursive !== null && (
        <div className="mt-4">
          <h4 className="font-semibold">Recursive Result:</h4>
          <p className="text-lg">{base}<sup>{exponent}</sup> = {resultRecursive}</p>
        </div>
      )}
    </div>
  );
};

export default Exponential;
