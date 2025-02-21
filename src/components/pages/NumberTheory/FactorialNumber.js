import React, { useState } from "react";

const FactorialNumber = () => {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState(null);
  const [steps, setSteps] = useState([]);

  // Function to calculate factorial with detailed steps
  const calculateFactorial = (num) => {
    if (num < 0) return "Factorial is not defined for negative numbers!";

    let factorial = 1;
    let stepDetails = [];

    // Build steps to show multiplication for each number
    for (let i = 1; i <= num; i++) {
      if (i === 1) {
        stepDetails.push(`Step 1: ${i}! = 1 (Initial value)`);
      } else {
        stepDetails.push(
          `Step ${i}: Multiply ${factorial} by ${i} to get ${factorial * i}`
        );
      }
      factorial *= i;
    }

    return { factorial, steps: stepDetails };
  };

  // Handler for the button click
  const handleCalculate = () => {
    const { factorial, steps } = calculateFactorial(parseInt(number));
    setResult(factorial);
    setSteps(steps);
  };

  return (
    <div className="bg-red-600 p-6 rounded shadow-md min-h-full">
      <h3 className="text-2xl font-semibold">Factorial Calculator</h3>
      <div className="mt-4 flex flex-col sm:flex-row gap-3 sm:gap-5 items-center py-4 px-6">
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className="border rounded px-4 py-3 h-12 text-lg w-full sm:w-64"
          placeholder="Enter a number"
        />
        <button
          onClick={handleCalculate}
          className="bg-blue-600 text-white rounded px-4 py-3 h-12 text-lg w-full sm:w-64"
        >
          Calculate Factorial
        </button>
      </div>

      {result !== null && (
        <div className="mt-4">
          {typeof result === "string" ? (
            <p className="text-lg">{result}</p>
          ) : (
            <>
              <p className="text-3xl font-bold ">Factorial: {result}</p>
              <h4 className="font-semibold mt-2">Detailed Steps:</h4>
              <ul className="list-decimal pl-5">
                {steps.map((step, index) => (
                  <li key={index} className="text-lg">
                    {step}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default FactorialNumber;
