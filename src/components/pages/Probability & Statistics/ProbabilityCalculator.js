import React, { useState } from "react";

const ProbabilityCalculator = () => {
  const [successes, setSuccesses] = useState("");
  const [total, setTotal] = useState("");
  const [probability, setProbability] = useState(null);

  const handleCalculate = () => {
    if (total > 0) {
      setProbability((successes / total).toFixed(4));
    }
  };

  return (
    <div className="bg-yellow-500 p-6 rounded shadow-md">
      <h3 className="text-2xl font-semibold">Probability Calculator</h3>
      <div className="mt-4 flex flex-col sm:flex-row gap-3 sm:gap-5 items-center">
        <input
          type="number"
          value={successes}
          onChange={(e) => setSuccesses(e.target.value)}
          className="border rounded px-4 py-3 h-12 text-lg w-full sm:w-64"
          placeholder="Successes"
        />
        <input
          type="number"
          value={total}
          onChange={(e) => setTotal(e.target.value)}
          className="border rounded px-4 py-3 h-12 text-lg w-full sm:w-64"
          placeholder="Total Outcomes"
        />
        <button
          onClick={handleCalculate}
          className="bg-white text-yellow-700 rounded px-4 py-3 h-12 text-lg w-full sm:w-64"
        >
          Calculate
        </button>
      </div>

      {probability !== null && <p className="mt-4 text-lg">Probability: {probability}</p>}
    </div>
  );
};

export default ProbabilityCalculator;
