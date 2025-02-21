import React, { useState } from 'react';

const QuadraticSolver = () => {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');
  const [result, setResult] = useState(null);
  const [steps, setSteps] = useState([]);

  const solveQuadratic = () => {
    const coeffA = parseFloat(a);
    const coeffB = parseFloat(b);
    const coeffC = parseFloat(c);

    if (isNaN(coeffA) || isNaN(coeffB) || isNaN(coeffC) || coeffA === 0) {
      setResult('Invalid input: a must be a nonzero number.');
      setSteps([]);
      return;
    }

    let stepsList = [];
    stepsList.push(`Given quadratic equation: ${coeffA}x² + ${coeffB}x + ${coeffC} = 0`);

    const discriminant = coeffB ** 2 - 4 * coeffA * coeffC;
    stepsList.push(`Step 1: Compute the discriminant Δ = b² - 4ac`);
    stepsList.push(`Δ = (${coeffB})² - 4(${coeffA})(${coeffC}) = ${discriminant}`);

    if (discriminant > 0) {
      const root1 = (-coeffB + Math.sqrt(discriminant)) / (2 * coeffA);
      const root2 = (-coeffB - Math.sqrt(discriminant)) / (2 * coeffA);
      stepsList.push(`Step 2: Since Δ > 0, the equation has two distinct real roots.`);
      stepsList.push(`Root 1: x = (-b + √Δ) / (2a) = (-(${coeffB}) + √${discriminant}) / (2(${coeffA})) = ${root1}`);
      stepsList.push(`Root 2: x = (-b - √Δ) / (2a) = (-(${coeffB}) - √${discriminant}) / (2(${coeffA})) = ${root2}`);
      setResult(`The roots are x = ${root1.toFixed(6)} and x = ${root2.toFixed(6)}`);
    } else if (discriminant === 0) {
      const root = -coeffB / (2 * coeffA);
      stepsList.push(`Step 2: Since Δ = 0, the equation has one real root (double root).`);
      stepsList.push(`Root: x = -b / (2a) = -(${coeffB}) / (2(${coeffA})) = ${root}`);
      setResult(`The root is x = ${root.toFixed(6)}`);
    } else {
      stepsList.push(`Step 2: Since Δ < 0, the equation has two complex roots.`);
      const realPart = (-coeffB / (2 * coeffA)).toFixed(6);
      const imaginaryPart = (Math.sqrt(-discriminant) / (2 * coeffA)).toFixed(6);
      stepsList.push(`Root 1: x = (-b + i√|Δ|) / (2a) = ${realPart} + ${imaginaryPart}i`);
      stepsList.push(`Root 2: x = (-b - i√|Δ|) / (2a) = ${realPart} - ${imaginaryPart}i`);
      setResult(`The roots are x = ${realPart} + ${imaginaryPart}i and x = ${realPart} - ${imaginaryPart}i`);
    }

    setSteps(stepsList);
  };

  return (
    <div className="bg-white p-6 rounded shadow-md space-y-4">
      <h3 className="text-2xl font-semibold">Quadratic Equation Solver</h3>
      <p>Enter coefficients for ax² + bx + c = 0</p>

      <div className="space-x-2">
        <input
          type="number"
          value={a}
          onChange={(e) => setA(e.target.value)}
          className="p-2 border rounded"
          placeholder="Enter a"
        />
        <input
          type="number"
          value={b}
          onChange={(e) => setB(e.target.value)}
          className="p-2 border rounded"
          placeholder="Enter b"
        />
        <input
          type="number"
          value={c}
          onChange={(e) => setC(e.target.value)}
          className="p-2 border rounded"
          placeholder="Enter c"
        />
      </div>

      <button
        onClick={solveQuadratic}
        className="bg-blue-600 text-white p-2 rounded mt-4"
      >
        Solve Quadratic Equation
      </button>

      {result && (
        <div className="mt-4">
          <h4 className="font-semibold">Solution:</h4>
          <p className="text-lg">{result}</p>
        </div>
      )}

      {steps.length > 0 && (
        <div className="mt-4">
          <h4 className="font-semibold">Detailed Steps:</h4>
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

export default QuadraticSolver;