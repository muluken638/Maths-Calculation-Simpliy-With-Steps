import React, { useState } from "react";

const TowerOfHanoi = () => {
  const [moves, setMoves] = useState([]);

  const solveHanoi = (n, from, to, aux, steps = []) => {
    if (n === 1) {
      steps.push(`Move disk 1 from ${from} to ${to}`);
      return steps;
    }
    solveHanoi(n - 1, from, aux, to, steps);
    steps.push(`Move disk ${n} from ${from} to ${to}`);
    solveHanoi(n - 1, aux, to, from, steps);
    return steps;
  };

  const handleSolve = () => {
    setMoves(solveHanoi(3, 'A', 'C', 'B'));
  };

  return (
    <div>
      <h3>Tower of Hanoi</h3>
      <button onClick={handleSolve}>Solve</button>
      <ul>
        {moves.map((move, index) => (
          <li key={index}>{move}</li>
        ))}
      </ul>
    </div>
  );
};

export default TowerOfHanoi;