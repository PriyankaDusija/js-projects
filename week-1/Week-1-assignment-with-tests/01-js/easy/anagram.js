/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {

  if (str1.length != str2.length) {
    return false;
  }

  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  var indexed = new Array(128).fill(0);
  for (var i = 0; i < str1.length; i++) {
    indexed[str1.charCodeAt(i)]++;
  }

  for (var i = 0; i < str2.length; i++) {
    indexed[str2.charCodeAt(i)]--;
  }

  for (var i = 0; i < indexed.length; i++) {
    if (indexed[i] < 0 || indexed[i] > 0)
      return false;
  }

  return true;

}

module.exports = isAnagram;