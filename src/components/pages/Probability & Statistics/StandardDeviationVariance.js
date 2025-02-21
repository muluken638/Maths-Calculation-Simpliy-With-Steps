import React, { useState } from "react";

const StandardDeviationVariance = () => {
  const [numbers, setNumbers] = useState("");
  const [variance, setVariance] = useState(null);
  const [stdDev, setStdDev] = useState(null);

  const calculateVariance = (nums) => {
    const mean = nums.reduce((a, b) => a + b, 0) / nums.length;
    return nums.reduce((acc, num) => acc + Math.pow(num - mean, 2), 0) / nums.length;
  };

  const handleCalculate = () => {
    const numArray = numbers.split(",").map(Number);
    if (numArray.length > 0) {
      const varianceValue = calculateVariance(numArray);
      setVariance(varianceValue);
      setStdDev(Math.sqrt(varianceValue));
    }
  };

  return (
    <div className="bg-green-500 p-6 rounded shadow-md">
      <h3 className="text-2xl font-semibold">Standard Deviation & Variance</h3>
      <div className="mt-4 flex flex-col sm:flex-row gap-3 sm:gap-5 items-center">
        <input
          type="text"
          value={numbers}
          onChange={(e) => setNumbers(e.target.value)}
          className="border rounded px-4 py-3 h-12 text-lg w-full sm:w-64"
          placeholder="Enter numbers"
        />
        <button
          onClick={handleCalculate}
          className="bg-white text-green-700 rounded px-4 py-3 h-12 text-lg w-full sm:w-64"
        >
          Calculate
        </button>
      </div>

      {variance !== null && (
        <div className="mt-4 text-lg">
          <p>Variance: {variance}</p>
          <p>Standard Deviation: {stdDev}</p>
        </div>
      )}
    </div>
  );
};

export default StandardDeviationVariance;
