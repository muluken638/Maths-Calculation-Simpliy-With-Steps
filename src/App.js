import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layouts/Layout";

import Fibonacci from "./components/pages/NumberTheory/Fibonacci";
import PrimeNumber from "./components/pages/NumberTheory/PrimeNumber";
import GcdlcmNumbers from "./components/pages/NumberTheory/GcdlcmNumbers";
import FactorialNumber from "./components/pages/NumberTheory/FactorialNumber";
import Exponential from "./components/pages/Algebra & Arithmetic/Exponential";
import MeanMedianMode from "./components/pages/Probability & Statistics/MeanMedianMode";
import CombinationPermutation from "./components/pages/Probability & Statistics/CombinationPermutation";
import ProbabilityCalculator from "./components/pages/Probability & Statistics/ProbabilityCalculator";
import StandardDeviationVariance from "./components/pages/Probability & Statistics/StandardDeviationVariance";
import AnagramFinder from "./components/pages/Pattern Recognition & Recursion/AnagramFinder";
import PalindromeChecker from "./components/pages/Pattern Recognition & Recursion/PalindromeChecker";
import PascalsTriangle from "./components/pages/Pattern Recognition & Recursion/PascalsTriangle";
import TowerOfHanoi from "./components/pages/Pattern Recognition & Recursion/TowerOfHanoi";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Number Theory */}
          <Route path="/fibonacci" element={<Fibonacci />} />
          <Route path="/prime" element={<PrimeNumber />} />
          <Route path="/factorial" element={<FactorialNumber />} />
          <Route path="/gcdlcm" element={<GcdlcmNumbers />} />
          {/* Algebra and Arthmetic */}
          <Route path="/exponential" element={<Exponential />} />

          {/* Probability and Statistics  */}
          <Route path="/meanmedianmode" element={<MeanMedianMode />} />
          <Route path="/combination" element={<CombinationPermutation />} />
          <Route path="/probability" element={<ProbabilityCalculator />} />
          <Route path="/deviation" element={<StandardDeviationVariance />} />
          {/* Pattern Recognation & Reccursion */}
          <Route path="/anagram" element={<AnagramFinder />} />
          <Route path="/palidrome" element={<PalindromeChecker />} />
          <Route path="/pascaltrangle" element={<PascalsTriangle />} />
          <Route path="/towerofhanoi" element={<TowerOfHanoi />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
