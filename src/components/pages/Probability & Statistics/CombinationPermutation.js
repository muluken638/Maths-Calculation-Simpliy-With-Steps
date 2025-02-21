import React, { useState } from "react";

const CombinationPermutation = () => {
  const [n, setN] = useState("");
  const [r, setR] = useState("");
  const [combination, setCombination] = useState(null);
  const [permutation, setPermutation] = useState(null);

  const factorial = (num) => (num <= 1 ? 1 : num * factorial(num - 1));

  const handleCalculate = () => {
    if (n >= r && r >= 0) {
      setCombination(factorial(n) / (factorial(r) * factorial(n - r)));
      setPermutation(factorial(n) / factorial(n - r));
    }
  };

  return (
    <div className="bg-purple-500 p-6 rounded shadow-md">
      <h3 className="text-2xl font-semibold">Combination & Permutation</h3>
      <button
        onClick={handleCalculate}
        className="bg-white text-purple-700 rounded px-4 py-3 h-12 text-lg w-full sm:w-64"
      >
        Calculate
      </button>
      <p className="mt-4 text-lg">Combination: {combination}</p>
      <p className="mt-2 text-lg">Permutation: {permutation}</p>
    </div>
  );
};

export default CombinationPermutation;
