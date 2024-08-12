/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const cleanedStr = str.replace(/[^a-z0-9]/gi, "").toLowerCase();
  const n = cleanedStr.length;

  for (let i = 0; i < n / 2; i++) {
    if (cleanedStr[i] !== cleanedStr[n - 1 - i]) return false;
  }

  return true;
}

module.exports = isPalindrome;
