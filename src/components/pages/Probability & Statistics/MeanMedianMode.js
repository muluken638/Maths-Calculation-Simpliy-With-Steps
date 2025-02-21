import React, { useState } from "react";

const MeanMedianMode = () => {
  const [numbers, setNumbers] = useState("");
  const [stats, setStats] = useState(null);
  const [steps, setSteps] = useState([]); // State to store calculation steps

  const calculateStatistics = (nums) => {
    if (nums.length === 0) return null;

    const steps = []; // Array to store steps
    steps.push("Step 1: Input numbers: " + nums.join(", "));

    // Step 2: Sort the numbers
    const sorted = [...nums].sort((a, b) => a - b);
    steps.push("Step 2: Sorted numbers: " + sorted.join(", "));

    // Step 3: Calculate sum
    const sum = nums.reduce((a, b) => a + b, 0);
    steps.push("Step 3: Sum of numbers: " + sum);

    // Step 4: Calculate mean
    const mean = sum / nums.length;
    steps.push("Step 4: Mean = Sum / Count = " + mean);

    // Step 5: Calculate median
    const mid = Math.floor(sorted.length / 2);
    const median =
      sorted.length % 2 === 0
        ? (sorted[mid - 1] + sorted[mid]) / 2
        : sorted[mid];
    steps.push(
      `Step 5: Median = Middle value of sorted numbers = ${median}`
    );

    // Step 6: Calculate mode
    const mode = calculateMode(nums, steps);

    // Step 7: Calculate min and max
    const min = Math.min(...nums);
    const max = Math.max(...nums);
    steps.push("Step 7: Min = " + min + ", Max = " + max);

    // Step 8: Calculate range
    const range = max - min;
    steps.push("Step 8: Range = Max - Min = " + range);

    // Step 9: Calculate count
    const count = nums.length;
    steps.push("Step 9: Count = " + count);

    // Step 10: Calculate quartiles
    const quartiles = calculateQuartiles(sorted, steps);

    // Step 11: Calculate percentiles
    const percentiles = {
      25: quartiles.q1,
      50: median,
      75: quartiles.q3,
    };
    steps.push(
      "Step 11: Percentiles (25% = " +
        percentiles[25] +
        ", 50% = " +
        percentiles[50] +
        ", 75% = " +
        percentiles[75] +
        ")"
    );

    // Set steps and statistics
    setSteps(steps);
    return { mean, median, mode, min, max, range, sum, count, quartiles, percentiles };
  };

  const calculateMode = (nums, steps) => {
    const frequency = {};
    nums.forEach((num) => (frequency[num] = (frequency[num] || 0) + 1));
    steps.push(
      "Step 6a: Frequency of each number: " +
        JSON.stringify(frequency, null, 2)
    );

    const maxFrequency = Math.max(...Object.values(frequency));
    steps.push(
      "Step 6b: Maximum frequency = " + maxFrequency
    );

    const modes = Object.keys(frequency).filter(
      (num) => frequency[num] === maxFrequency
    );
    steps.push(
      "Step 6c: Mode(s) = Number(s) with maximum frequency = " +
        modes.join(", ")
    );

    return modes.length === nums.length ? "No Mode" : modes.map(Number);
  };

  const calculateQuartiles = (sorted, steps) => {
    const q1 = calculateMedian(sorted.slice(0, Math.floor(sorted.length / 2)));
    steps.push(
      "Step 10a: Q1 = Median of lower half = " + q1
    );

    const q3 = calculateMedian(sorted.slice(Math.ceil(sorted.length / 2)));
    steps.push(
      "Step 10b: Q3 = Median of upper half = " + q3
    );

    return { q1, q3 };
  };

  const calculateMedian = (nums) => {
    const mid = Math.floor(nums.length / 2);
    return nums.length % 2 === 0 ? (nums[mid - 1] + nums[mid]) / 2 : nums[mid];
  };

  const handleCalculate = () => {
    const numArray = numbers.split(",").map(Number).filter((n) => !isNaN(n));
    setStats(calculateStatistics(numArray));
  };

  return (
    <div className="bg-blue-500 p-6 rounded shadow-md">
      <h3 className="text-2xl font-semibold">Statistics Calculator</h3>
      <div className="mt-4 flex flex-col sm:flex-row gap-3 sm:gap-5 items-center">
        <input
          type="text"
          value={numbers}
          onChange={(e) => setNumbers(e.target.value)}
          className="border rounded px-4 py-3 h-12 text-lg w-full sm:w-64"
          placeholder="Enter numbers (e.g. 1,2,3)"
        />
        <button
          onClick={handleCalculate}
          className="bg-white text-blue-700 rounded px-4 py-3 h-12 text-lg w-full sm:w-64"
        >
          Calculate
        </button>
      </div>

      {stats && (
  <div className="mt-4 overflow-x-auto">
    <h4 className="text-xl font-semibold mb-2">Results:</h4>
    <table className="min-w-full border-collapse border border-gray-300 text-white">
      <thead>
        <tr className="bg-black-200">
          <th className="border border-gray-300 px-4 py-1 text-left">Metric</th>
          <th className="border border-gray-300 px-4 py-1 text-left">Value</th>
        </tr>
      </thead>
      <tbody className="text-white">
        {[
          { label: "Mean", value: stats.mean },
          { label: "Median", value: stats.median },
          { label: "Mode", value: stats.mode },
          { label: "Min", value: stats.min },
          { label: "Max", value: stats.max },
          { label: "Range", value: stats.range },
          { label: "Sum", value: stats.sum },
          { label: "Count", value: stats.count },
          { label: "Q1", value: stats.quartiles.q1 },
          { label: "Q3", value: stats.quartiles.q3 },
          { label: "Percentiles (25%)", value: stats.percentiles[25] },
          { label: "Percentiles (50% / Median)", value: stats.percentiles[50] },
          { label: "Percentiles (75%)", value: stats.percentiles[75] },
        ].map((item, index) => (
          <tr key={index} className="even:bg-transparent odd:bg-green-400 ">
            <td className="border border-gray-300 px-4 py-2">{item.label}</td>
            <td className="border border-gray-300 px-4 py-2">{item.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)}


      {steps.length > 0 && (
        <div className="mt-4 text-lg">
          <h4 className="text-xl font-semibold">Calculation Steps:</h4>
          <ol className="list-decimal pl-6">
            {steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
};

export default MeanMedianMode;