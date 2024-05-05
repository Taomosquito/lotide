/*
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
*/

const countLetters = function (sentence) {
  let refObj = {}
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' '){
      if (refObj[sentence[i]]) {
        refObj[sentence[i]] += 1;
      } else {
        refObj[sentence[i]] = 1;
      }
    }
  }
  return refObj
}
console.log(countLetters("scott has ADHD"));
console.log(countLetters("scott has Aphantasia"));