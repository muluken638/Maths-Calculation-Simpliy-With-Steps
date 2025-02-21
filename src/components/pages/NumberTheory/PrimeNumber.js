import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

const PrimeNumber = () => {
  const [number, setNumber] = useState('');
  const [isPrime, setIsPrime] = useState(null);
  const [steps, setSteps] = useState([]);

  // Function to check if the number is prime and return detailed steps
  const checkPrime = () => {
    const num = parseInt(number);
    let prime = true;
    let stepDetails = [];

    if (num <= 1) {
      prime = false;
      stepDetails.push(`Step 1: ${num} is not prime because primes are greater than 1.`);
    } else {
      for (let i = 2; i <= Math.sqrt(num); i++) {
        stepDetails.push(`Step: Checking if ${num} is divisible by ${i}`);
        if (num % i === 0) {
          prime = false;
          stepDetails.push(`Step: ${num} is divisible by ${i}, so it is not prime.`);
          break;
        }
      }
      if (prime) {
        stepDetails.push(`Step: ${num} is not divisible by any number other than 1 and itself, so it is prime.`);
      }
    }
    setSteps(stepDetails);
    setIsPrime(prime);
  };

  return (
   
      <div className="bg-red-600 p-6 rounded shadow-md min-h-full">
      <h3 className="text-2xl font-semibold">Prime Number Checker</h3>
      <div className="mt-4 flex flex-col sm:flex-row gap-3 sm:gap-5 items-center py-4 px-6">
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className="border rounded px-4 py-3 h-12 text-lg w-full sm:w-64"
          placeholder="Enter a number"
        />
        <button
          onClick={checkPrime}
          className="bg-blue-600 text-white rounded px-4 py-3 h-12 text-lg w-full sm:w-64"
        >
          Calculate Factorial
        </button>
      </div>
      {steps.length > 0 && (
        <div className="mt-4">
          <h4 className="font-semibold">Steps to Check if Prime:</h4>
          <ul className="list-decimal pl-5">
            {steps.map((step, index) => (
              <li key={index} className="text-lg">{step}</li>
            ))}
          </ul>
        </div>
      )}

      {isPrime !== null && (
        <div className="mt-4">
          {isPrime ? (
            <p className="text-3xl text-black">This is a prime number.✅</p>
          ) : (
            <p className="text-3xl text-black flex flex-row items-center">This is not a prime number.<h className="bg-white p-1 border-2 border-black rounded-sm">❌</h></p>
          )}
        </div>
      )}
    </div>
  );
};

export default PrimeNumber;
