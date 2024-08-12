/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const s1 = str1.toLowerCase();
  const s2 = str2.toLowerCase();

  if (s1.length !== s2.length) return false;

  const map = {};

  // store the letters and their count
  for (let i = 0; i < s1.length; i++) {
    map[s1[i]] = (map[s1[i]] || 0) + 1;
  }

  // check the map for the count of the letters
  for (let i = 0; i < s2.length; i++) {
    if (!map[s2[i]]) return false;
    else map[s2[i]]--;
  }
  return true;
}

module.exports = isAnagram;
