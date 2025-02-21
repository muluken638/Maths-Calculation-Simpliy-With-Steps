import React, { useState } from 'react';

const GcdlcmNumbers = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [gcd, setGcd] = useState(null);
  const [lcm, setLcm] = useState(null);
  const [stepsGcd, setStepsGcd] = useState([]);
  const [stepsLcm, setStepsLcm] = useState([]);

  // Function to calculate GCD using Euclidean Algorithm
  const calculateGCD = (a, b) => {
    let steps = [];
    let step = `Start with ${a} and ${b}.`;
    steps.push(step);

    while (b !== 0) {
      let remainder = a % b;
      steps.push(`Divide ${a} by ${b}, remainder is ${remainder}.`);
      a = b;
      b = remainder;
    }
    steps.push(`The GCD is ${a}.`);
    setStepsGcd(steps);
    return a;
  };

  // Function to calculate LCM using the formula: LCM(a, b) = (a * b) / GCD(a, b)
  const calculateLCM = (a, b) => {
    let gcdValue = calculateGCD(a, b); // Use GCD to calculate LCM
    let lcmValue = (a * b) / gcdValue;
    setStepsLcm([
      `The formula for LCM is (a * b) / GCD(a, b).`,
      `Using GCD = ${gcdValue}, LCM = (${a} * ${b}) / ${gcdValue} = ${lcmValue}.`
    ]);
    return lcmValue;
  };

  const handleCalculate = () => {
    const num1Int = parseInt(num1);
    const num2Int = parseInt(num2);

    if (num1Int > 0 && num2Int > 0) {
      const gcdValue = calculateGCD(num1Int, num2Int);
      const lcmValue = calculateLCM(num1Int, num2Int);
      setGcd(gcdValue);
      setLcm(lcmValue);
    }
  };

  return (
    <div className="bg-red-600 p-6 rounded shadow-md min-h-full">
    <h3 className="text-2xl font-semibold">Exponentiation Calculator</h3>

    <div className="mt-4 flex flex-col sm:flex-row gap-3 sm:gap-5 items-center py-4 px-6">
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        className="border rounded px-4 py-3 h-12 text-lg w-full sm:w-64"
        placeholder="Enter base"
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
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

      {/* GCD and Steps */}
      {gcd !== null && (
        <div className="mt-4">
          <h4 className="font-semibold">GCD Steps:</h4>
          <ul className="list-decimal pl-5">
            {stepsGcd.map((step, index) => (
              <li key={index} className="text-lg">{step}</li>
            ))}
          </ul>
          <p className="text-lg font-semibold mt-2">The GCD is: {gcd}</p>
        </div>
      )}

      {/* LCM and Steps */}
      {lcm !== null && (
        <div className="mt-4">
          <h4 className="font-semibold">LCM Steps:</h4>
          <ul className="list-decimal pl-5">
            {stepsLcm.map((step, index) => (
              <li key={index} className="text-lg">{step}</li>
            ))}
          </ul>
          <p className="text-lg font-semibold mt-2">The LCM is: {lcm}</p>
        </div>
      )}
    </div>
  );
};

export default GcdlcmNumbers;
