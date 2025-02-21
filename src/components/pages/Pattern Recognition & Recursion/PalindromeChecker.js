import React, { useState } from "react";

const PalindromeChecker = () => {
  const [text, setText] = useState("");
  const [isPalindrome, setIsPalindrome] = useState(null);

  const checkPalindrome = () => {
    const cleanedText = text.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    setIsPalindrome(cleanedText === cleanedText.split('').reverse().join(''));
  };

  return (
    <div>
      <h3>Palindrome Checker</h3>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={checkPalindrome}>Check</button>
      {isPalindrome !== null && <p>{isPalindrome ? "Yes, it's a palindrome!" : "No, not a palindrome."}</p>}
    </div>
  );
};

export default PalindromeChecker;