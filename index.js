function isPalindrome(word) {
  return word === word.split('').reverse().join('');
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("\nTest Case 3: 'abba' (Expecting: true)");
  console.log("=>", isPalindrome("abba"));

  console.log("\nTest Case 4: 'a' (Expecting: true)");
  console.log("=>", isPalindrome("a"));

  console.log("\nTest Case 5: 'ab' (Expecting: false)");
  console.log("=>", isPalindrome("ab"));
}

module.exports = isPalindrome;
