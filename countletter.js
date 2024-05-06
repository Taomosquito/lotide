
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const countLetters = function (sentence) {
  let refObj = {}
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ') {
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
const result1 = countLetters('scott has ADHD');
assertEqual(result1['s'], 2);
assertEqual(result1['c'], 1);
assertEqual(result1['o'], 1);
assertEqual(result1['t'], 2);
assertEqual(result1['h'], 1);
assertEqual(result1['a'], 1);
assertEqual(result1['A'], 1);
assertEqual(result1['D'], 2);
assertEqual(result1['H'], 1);




console.log(countLetters("scott has Aphantasia"));