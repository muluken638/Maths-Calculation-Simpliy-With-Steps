import React, { useState } from "react";

const Logarithm = () => {
  const [number, setNumber] = useState('');
  const [base, setBase] = useState('');
  const [resultIterative, setResultIterative] = useState(null);
  const [resultMath, setResultMath] = useState(null);
  const [steps, setSteps] = useState([]);

  // Iterative Approximation (Trial Multiplication)
  const calculateLogIterative = (number, base) => {
    if (number <= 0 || base <= 0 || base === 1) {
      return "Logarithm is undefined for non-positive numbers and base 1.";
    }

    let result = 0;
    let stepsList = [];
    let currentValue = 1;

    stepsList.push(`Start with result = 0, currentValue = 1.`);
    
    while (currentValue < number) {
      currentValue *= base;
      result++;
      stepsList.push(`Multiply by ${base}, currentValue = ${currentValue}, result = ${result}`);
    }

    if (currentValue > number) {
      result--; // Adjust since we overshoot
      currentValue /= base;
      stepsList.push(`Overshot, so adjust down: result = ${result}, currentValue = ${currentValue}`);
    }

    setSteps(stepsList);
    return result;
  };

  // Logarithm Using Built-in Math Function
  const calculateLogMath = (number, base) => {
    return Math.log(number) / Math.log(base);
  };

  const handleCalculate = () => {
    const num = parseFloat(number);
    const baseNum = parseFloat(base);

    if (!isNaN(num) && !isNaN(baseNum) && num > 0 && baseNum > 0 && baseNum !== 1) {
      const iterativeResult = calculateLogIterative(num, baseNum);
      const mathResult = calculateLogMath(num, baseNum);
      setResultIterative(iterativeResult);
      setResultMath(mathResult);
    } else {
      setResultIterative("Invalid input");
      setResultMath("Invalid input");
      setSteps([]);
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow-md space-y-4">
      <h3 className="text-2xl font-semibold">Logarithm Calculator</h3>

      <div>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className="p-2 border rounded"
          placeholder="Enter number"
        />
        <input
          type="number"
          value={base}
          onChange={(e) => setBase(e.target.value)}
          className="p-2 border rounded ml-2"
          placeholder="Enter base"
        />
      </div>

      <button
        onClick={handleCalculate}
        className="bg-blue-600 text-white p-2 rounded mt-4"
      >
        Calculate Logarithm
      </button>

      {/* Iterative Result */}
      {resultIterative !== null && (
        <div className="mt-4">
          <h4 className="font-semibold">Iterative Approximation Steps:</h4>
          <ul className="list-decimal pl-5">
            {steps.map((step, index) => (
              <li key={index} className="text-lg">{step}</li>
            ))}
          </ul>
          <p className="text-lg font-semibold mt-2">Iterative Log Result: {resultIterative}</p>
        </div>
      )}

      {/* Math Function Result */}
      {resultMath !== null && (
        <div className="mt-4">
          <h4 className="font-semibold">Math Function Result:</h4>
          <p className="text-lg">log<sub>{base}</sub>({number}) = {resultMath}</p>
        </div>
      )}
    </div>
  );
};

export default Logarithm;
