import React, { useState } from "react";

const AnagramFinder = () => {
  const [word1, setWord1] = useState("");
  const [word2, setWord2] = useState("");
  const [isAnagram, setIsAnagram] = useState(null);

  const checkAnagram = () => {
    const sorted1 = word1.replace(/\s/g, "").toLowerCase().split('').sort().join('');
    const sorted2 = word2.replace(/\s/g, "").toLowerCase().split('').sort().join('');
    setIsAnagram(sorted1 === sorted2);
  };

  return (
    <div>
      <h3>Anagram Finder</h3>
      <input type="text" value={word1} onChange={(e) => setWord1(e.target.value)} placeholder="Word 1" />
      <input type="text" value={word2} onChange={(e) => setWord2(e.target.value)} placeholder="Word 2" />
      <button onClick={checkAnagram}>Check</button>
      {isAnagram !== null && <p>{isAnagram ? "Yes, they are anagrams!" : "No, not anagrams."}</p>}
    </div>
  );
};

export default AnagramFinder;